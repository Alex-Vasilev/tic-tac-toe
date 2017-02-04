class TicTacToe {
	constructor() {
		this.count = 0;
		this.board = [[0,0,0],
		              [0,0,0],
		              [0,0,0]];
	}

	getCurrentPlayerSymbol() {
		return this.count % 2 ? 'o' : 'x';
	}

	nextTurn(rowIndex, columnIndex) {
		if(!this.board[rowIndex][columnIndex] && this.count < 9) {
			this.board[rowIndex][columnIndex] = this.count % 2 ?  'o' : 'x';
			this.count++;
		}
	}

	isFinished() {
		return (!!this.getWinner() || this.noMoreTurns());
	}

	getWinner() {
		if((this.board[0][0] !=0 && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2])
			|| (this.board[0][2] !=0 && this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0])) 
			return this.board[1][1]; 

		for(var i = 0; i <3; i++) {
			if(this.board[i][0] !=0 && this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2]) 
				return this.board[i][0]
		}

		for(var i = 0; i < 3; i++){ 
			if(this.board[0][i] !=0 && this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[2][i])
				return this.board[0][i]; 
		}
		return null;
	}

	noMoreTurns() {
		return this.count == 9 ? true : false;
	}

	isDraw() {
		return (this.isFinished() && !this.getWinner());
	}

	getFieldValue(rowIndex, colIndex) {
		return this.board[rowIndex][colIndex] ? this.board[rowIndex][colIndex] : null;
	}
}

module.exports = TicTacToe;

