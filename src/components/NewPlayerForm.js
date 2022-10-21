import { useRef } from 'react';

function NewPlayerForm(props) {
  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const imageInputRef = useRef();
  const rankInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const fName = fnameInputRef.current.value;
    const lName = lnameInputRef.current.value;
    const imageURL = imageInputRef.current.value;
    const rank=rankInputRef.current.value;

    const meetupData = {
      id: 0,
      imageURL: imageURL,
      fName: fName,
      lName: lName,
      rank:rank,
      teamId:0
    };

    props.onAddPlayer(props.playersList);
    //props.onAddMeetup(meetupData);
  }

  return (
  
      <form  onSubmit={submitHandler}>
        <div >
          <label htmlFor='fname'>First Name</label>
          <input type='text' required id='fname' ref={fnameInputRef} />
        </div>
        <div >
          <label htmlFor='lname'>Last Name</label>
          <input type='text' required id='lname' ref={lnameInputRef} />
        </div>
        <div >
          <label htmlFor='image'>Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div >
          <label htmlFor='rank'>Rank</label>
          <input type='text' required id='rank' ref={rankInputRef} />
        </div>
        
        <div >
          <button>Add</button>
        </div>
      </form>
  );
}

export default NewPlayerForm;
