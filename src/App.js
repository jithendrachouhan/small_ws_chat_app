import { useEffect, useRef, useState } from "react";
import MessageLayout from "./components/MessageLayout";

function App() {

  const [isError, setIsError] = useState() 
  const [isServerConnected, setIsServerConnected] = useState(false) 
  const [userDetails, setUserDetails] = useState() 
  const userName = useRef()
  const messageRef = useRef()
  const messageContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [userDetails, userDetails?.conversation]);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
        const { scrollHeight, clientHeight } = messageContainerRef.current;
        messageContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  };

  const handleUserName = () => {
    if(!userName.current.value){
      setIsError("User Name Should not be Empty")
      return
    } 
    setIsError(null)
    setUserDetails(
      {
        userName: userName.current.value,
        conversation:[
          {isSend:false,message:"Hey there how you doing!!"},
          {isSend:true,message:"I am doing good, how about you??"},
          {isSend:false,message:"I am also doing good, long time no see"},
          {isSend:true,message:"Keiyak hogidde bro"},
          {isSend:false,message:"Sorry!!!"},
          {isSend:true,message:"Keiyaake bro keiyakke Funking"},
          {isSend:false,message:"tuuuuuu "},
          {isSend:true,message:"what tuuu!!"},
          {isSend:true,message:"There is nothing tuu in that"},
        ]
      }
    )
  }

  const handleServerConnection = () => {
    setIsServerConnected(!isServerConnected)
  }

  const handleCompleteRefresh = () => {
    setIsError(null)
    setIsServerConnected(false)
    setUserDetails(null)
  }

  const handleMessageSending = () => {
    if(messageRef.current.value){
      setUserDetails({...userDetails.conversation.push({
        message: messageRef.current.value,
        isSend:true
      }),...userDetails})
      messageRef.current.value = '';
    }
    
  }

  return (
   <div className="flex items-center justify-center h-screen bg-black text-gray-100">
      <div className="w-[30%] h-[50%]">
        {!userDetails && <div className="p-2 grid grid-cols-12 bg-slate-500  ">
          <input ref={userName} className="p-2 bg-gray-800 col-span-9" type="text" placeholder="Enter your Display Name"/>
          <button onClick={handleUserName} className="p-2 bg-red-500 col-span-3">Submit</button>
        </div>}
        {userDetails && 
        <div className="p-2 flex items-center justify-between bg-slate-500 ">
          <h1 className="font-bold">Name: <span className="font-normal">{userDetails.userName }</span></h1>
          <button onClick={handleServerConnection} className={`py-2 px-6 ${isServerConnected? "bg-green-500": "bg-red-500"} `}>
            {isServerConnected? "Disconnect": "Connect"}
          </button>
        </div>}
        {isError && <h1 className="my-2 text-red-600">*{isError}</h1>}
        <div className="h-[90%] flex items-center justify-center bg-gray-800   my-2 p-2 ">
          {/* <h1 className="text-3xl"> Connect to Server and Start Conversation</h1> */}
          <div className="min-h-[100%] max-h-[100%] w-[100%] overflow-y-auto bg-gray-400 no-scrollbar flex-col flex " ref={messageContainerRef}>
            <div className="flex flex-col p-2 gap-2 mt-auto">
              {userDetails && userDetails.conversation.map((data) => <MessageLayout isSend={data.isSend} message={data.message}/>)}
            </div>
          </div>
        </div>  
        {isServerConnected && <div className="p-2 grid grid-cols-12 bg-slate-500 ">
          <input ref={messageRef} className="p-2 bg-gray-800 col-span-9" type="text" placeholder="Enter your Display Name"/>
          <button onClick={handleMessageSending} className="p-2 bg-red-500 col-span-3">Send</button>
        </div>}
      </div>
      {userDetails && <button onClick={handleCompleteRefresh} className="absolute top-5 right-5 py-2 px-6 bg-red-700">Complete Refresh</button>}
   </div>
  );
}

export default App;
