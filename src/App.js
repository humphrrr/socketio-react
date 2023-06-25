import { useEffect } from 'react';
import { disconnectSocket, initiateSocketConnection, subscribeToChat } from './socketio.service';

export default function App() {
  useEffect(() => {
    initiateSocketConnection();
    subscribeToChat((err, data) => {
      console.log(data);
    });
    return () => {
      disconnectSocket();
    }
  }, []);
}