import "../scripts/node_modules/@chrisoakman/chessboardjs/dist/chessboard-1.0.0.js";
let fenPos;
let changeCount = 0;
let config;
let lastPlayed = false;


let board = Chessboard("board", {
  draggable: true,
  dropOffBoard: "trash",
  sparePieces: true,
  onChange: onChange
});

$("#board1-load").keypress(function (e) {
  if(e.which == 13) {
    fenPos = board.fen(board);
    $.ajax({
      url: " http://localhost:3000/board1load ",
      type: "GET",
      datatype: "text",
      success: function (res) {
        board.position(res);
      },
    });
  }
});

$("#board2-load").keypress(function (e) {
  if(e.which == 13) {
    fenPos = board.fen(board);
    $.ajax({
      url: " http://localhost:3000/board2load ",
      type: "GET",
      datatype: "text",
      success: function (res) {
        board.position(res);
      },
    });
  }
});

$("#board3-load").keypress(function (e) {
  if(e.which == 13) {
    fenPos = board.fen(board);
    $.ajax({
      url: " http://localhost:3000/board3load ",
      type: "GET",
      datatype: "text",
      success: function (res) {
        board.position(res);
      },
    });
  }
});

function onChange (oldPos, newPos) {
  let checkmate_count = 0;
  let pin_count = 0;
  let forked_count = 0;
  let forked_pieces = 0;
  let chess = new Chess();
  let chess_pos = Chessboard.objToFen(newPos) + " w" + " -" + " -" + " 0" + " 1";
  chess.load(chess_pos);
  console.log(chess.moves({verbose: true}));  
  
  function loopMoves () {
    for (let i = 0; i < chess.moves().length; ++i) {
      let previous_piece;
      let move_info = chess.move(chess.moves()[i]);
      if(i == 0) {
        previous_piece = move_info.piece;
      }
      if(move_info.piece != previous_piece) {
        if(forked_pieces >= 2) {
          ++forked_count;
        }
        forked_pieces = 0;
      }
      if(chess.in_checkmate() == true) {
        ++checkmate_count;
      } 
      if(chess.in_check() == true && (move_info.captured != 'p' || move_info.captured != null)) {
        ++pin_count;
      }
      if((move_info.captured == 'q' || move_info.captured == 'r') && move_info.piece == 'n') {
        ++forked_pieces;
      } else if((move_info.captured != 'p' || move_info.captured != null) && move_info.piece == 'p') {
        ++forked_pieces;
      }
    chess.load(chess_pos);  
    }

  }
  loopMoves(); 
  
  animPopUp(checkmate_count + " WHITE CHECKMATES");
  document.getElementById("myPopup").addEventListener("animationend", () =>
  {
    animPopUp(pin_count + " WHITE PINS");
    document.getElementById("myPopup").addEventListener("animationend", () =>
    {
      animPopUp(forked_count + " WHITE FORKS");

      chess_pos = Chessboard.objToFen(newPos) + " b" + " -" + " -" + " 0" + " 1";
      console.log(chess.moves({verbose: true}));  
      chess.load(chess_pos);
      checkmate_count = 0;
      pin_count = 0;
      forked_count = 0;
      forked_pieces = 0;
      loopMoves();

      document.getElementById("myPopup").addEventListener("animationend", () =>
      {
        animPopUp(checkmate_count + " BLACK CHECKMATES");
        document.getElementById("myPopup").addEventListener("animationend", () =>
        {
          animPopUp(pin_count + " BLACK PINS");
          document.getElementById("myPopup").addEventListener("animationend", () =>
          {
            animPopUp(forked_count + " BLACK FORKS");
          }, { once: true })
        }, { once: true })
      }, { once: true })
    }, { once: true })
  }, { once: true })
}

function animPopUp(tactic) {
  
  document.getElementById("myPopup").classList.remove('show'); 
  document.getElementById("backdrop").classList.remove('dark'); 
  document.getElementById("myPopup").innerHTML = tactic;
  void document.getElementById("myPopup").offsetWidth;
  document.getElementById("backdrop").classList.add('dark'); 
  document.getElementById("myPopup").classList.add('show'); 
}

$(".name-edit").keypress(function(e){
  if(e.which == 13) {
      $(this).blur();
    }
});
