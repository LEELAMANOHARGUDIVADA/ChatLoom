import { useState } from "react";
import { Link } from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid';
import { IoArrowBackOutline } from "react-icons/io5";


const CreateMeeting = () => {
    const [meetingName, setMeetingName] = useState('');
    const [meetingUsers, setMeetingUsers] = useState('');
    // const roomId = uuidv4();

    {meetingUsers < 0 && setMeetingUsers(0)}

    const formHandler = (e) => {
        
        e.preventDefault();
        window.location.href = `/meetings/videoconference`;
        console.log(roomId)
    }
    

  return (
    <>
    <div className="w-full h-screen flex items-center justify-center">
    <form  onSubmit={formHandler} className="bg-white w-80  md:w-96 h-96 p-5 rounded-xl flex flex-col items-center justify-center gap-10">
        <div>
            <h2 className="text-xl font-semibold">Create Meeting</h2>
        </div>
        <div className="w-2/3 px-5 py-2 border-2 hover:border-sky-600">
            <input type="text" placeholder="Meeting Name" className="outline-none " required onChange={(e) => setMeetingName(e.target.value)} value={meetingName} />
        </div>
        <div className="w-2/3 px-5 py-2 border-2 hover:border-sky-600">
            <input type="number" className="outline-none" required onChange={(e => setMeetingUsers(e.target.value))} value={meetingUsers} placeholder="Number of Users"   />
        </div>
        <button type="submit" className="btn px-10 py-4 text-white rounded-full">Create Meeting</button>
    </form>
    </div>
    <div className="absolute top-5 left-4">
        <Link to={`/`}>
            <button className="btn px-4 py-2 rounded-full text-white"><IoArrowBackOutline size={25} /></button>
        </Link>
    </div>
    </>
  )
}

export default CreateMeeting