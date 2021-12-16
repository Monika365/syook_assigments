function findSaddlePoint(mat, n)
{


		for (let i = 0; i < n; i++)
		{
		
			// Find the minimum element of row i.
			// Also find column index of the minimum element
			let min_row = mat[i][0], col_ind = 0;
			for (let j = 1; j < n; j++)
			{
				if (min_row > mat[i][j])
				{
					min_row = mat[i][j];
					col_ind = j;
				}
			}
	
			// Check if the minimum element of row is also
			// the maximum element of column or not
			let k;
			for (k = 0; k < n; k++)
	
				// Note that col_ind is fixed
				if (min_row < mat[k][col_ind])
					break;
	
			// If saddle point is present in this row then
			// print it
			if (k == n)
			{
			console.log("Value of Saddle Point " ,min_row);
			return true;
			}
		}
	
		// If Saddle Point not found
		return false;
}

// Driver method
let mat = [[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9]];
		
		let n = 3;
		if (findSaddlePoint(mat, n) == false)
			console.log("No Saddle Point ");