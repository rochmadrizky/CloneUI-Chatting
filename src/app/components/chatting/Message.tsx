import React from "react";

interface MessageProps {
  message: string;
  timestamp: string;
  sender: string;
}

const Message: React.FC<MessageProps> = ({ message, timestamp }) => {
  return (
    <div className="flex items-start space-x-4 mb-4">
      <div>
        <div className="bg-blue-200 p-2 rounded-lg">
          <p className="text-sm">{message}</p>
        </div>
        <p className="text-xs text-gray-500">{timestamp}</p>
      </div>
    </div>
  );
};

export default Message;
