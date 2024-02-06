import React from "react";

interface ReplyPesanProps {
  replyingTo: Pesan | null;
  setReplyingTo: React.Dispatch<React.SetStateAction<Pesan | null>>;
}

interface Pesan {
  message: string;
  timestamp: string;
  sender: string;
}

const ReplyPesan: React.FC<ReplyPesanProps> = ({
  replyingTo,
  setReplyingTo,
}) => {
  if (!replyingTo) return null;

  const handleCancel = () => {
    setReplyingTo(null);
  };

  return (
    <div className="bg-gray-100 p-2 mb-2 rounded-lg">
      Replying to: {replyingTo.sender} - {replyingTo.message}
      <button onClick={handleCancel} className="ml-2 text-red-500">
        Cancel
      </button>
    </div>
  );
};

export default ReplyPesan;
