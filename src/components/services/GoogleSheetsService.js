// Function to create a Google Spreadsheet
async function createSpreadsheet(
  columnCount,
  rowCount,
  columnHeaders,
  rowData,
  accessToken,
  projectName,
) {
  // Google Sheets API endpoint
  const url = 'https://sheets.googleapis.com/v4/spreadsheets';

  console.log('Row data:', rowData);

  // Request body to create the spreadsheet
  const requestBody = {
    properties: {
      title: projectName, // Set the title of the spreadsheet to the project name
    },
    sheets: [
      {
        properties: {
          title: 'Sheet1', // Title of the first sheet
          gridProperties: {
            rowCount: rowCount + 1, // Add 1 for the header row
            columnCount: columnCount, // Number of columns
          },
        },
        data: [
          // Data for the first sheet
          {
            startRow: 0, // Start inserting data from row 0 (the first row)
            startColumn: 0, // Start inserting data from column 0 (the first column)
            rowData: [
              // Row data for the first sheet
              {
                values: columnHeaders.map(header => ({
                  // Map column headers to userEnteredValue objects for the first row
                  userEnteredValue: {stringValue: header},
                })),
              },
              // Concatenate row data for the first sheet after the column headers
              ...rowData.map(row => ({
                values: row.map(cell => ({
                  // Map row data to userEnteredValue objects for the subsequent rows
                  userEnteredValue: {stringValue: cell},
                })),
              })),
            ],
          },
        ],
      },
    ],
  };

  try {
    // Send a POST request to create the spreadsheet
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`, // Include access token in the Authorization header
      },
      body: JSON.stringify(requestBody), // Convert request body to JSON
    });

    // Check if the response is ok
    if (!response.ok) {
      const errorResponse = await response.json();
      // Throw an error if the response is not ok
      throw new Error(
        `Failed to create spreadsheet: ${errorResponse.error.message}`,
      );
    }

    // Parse the response JSON
    const responseData = await response.json();
    // Log the data being sent to the spreadsheet
    console.log('Data sent to the spreadsheet:', requestBody);
    // Log the array and object in more detail
    console.log('Request body array:', requestBody.sheets[0].data[0].rowData);
    console.log('Request body object:', requestBody.sheets[0].data[0]);

    // Return the spreadsheet ID
    return responseData.spreadsheetId;
  } catch (error) {
    // Handle errors
    console.error('Error creating spreadsheet:', error);
    throw error;
  }
}

// Export the createSpreadsheet function
export {createSpreadsheet};
