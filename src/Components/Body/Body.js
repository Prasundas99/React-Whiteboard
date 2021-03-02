import { SketchField, Tools, setBackgroundFromDataUrl } from "react-sketch-whiteboard";
import { io } from "socket.io-client";


export default function Body({ color, lineWidth }) {
  var socket = io('http://localhost:5000', {transports: ['websocket']});
  socket.on('connect', function () {
    console.log('connected!');
    socket.emit('greet', { message: 'Hello Mr.Server!' });
  });


  //socket.current.emit('drawing', setBackgroundFromDataUrl);
  return (
    <div>
      <SketchField
        width="100vw"
        height="90vh"
        margin-top="4rem"
        tool={Tools.Pencil}
        lineColor={`${color.hex}`}
        lineWidth={lineWidth}
        undoSteps={15}
      />
    </div>
  );
}
