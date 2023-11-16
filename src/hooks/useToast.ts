import { useState } from "react";

type TypeMessage = "DEFAULT" | "SUCCESS";

export interface MessagesProps {
  message: string;
  type: TypeMessage;
}

//HOOK USTOMIZADO QUE RECEBE A MENSAGEM E O TIPO E FAZ APARECER O TOAST NA TELA
export function useCustomToast() {
  const [message, setMessage] = useState<MessagesProps[]>([]);

  const showToast = (newMessage: string, type: TypeMessage) => {
    let message: MessagesProps = {
      message: newMessage,
      type: type,
    };
    setMessage((prevMessage) => [...prevMessage, message]);

    setTimeout(() => {
      hideToast();
    }, 5000);
    //LIMPA O ARRAY COM A MENSAGEM
    const hideToast = () => {
      setMessage((prevMessage) => prevMessage.slice(1));
    };
  };

  return { showToast, message };
}
