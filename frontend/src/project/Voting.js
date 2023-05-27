import React, { useState ,useEffect } from 'react';

const candidates = ['Candidate 1', 'Candidate 2', 'Candidate 3', 'Candidate 4'];

function Voting() {
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [voter,setVoter]= useState();
  var [hasVoted, setHasVoted] = useState(false);
  useEffect(()=>{
    getProducts()
    
     },[])
  const getProducts = async () =>{
    let result = await fetch('http://localhost:5000/addmin');
 result = await result.json();
 setVoter(result)
// console.log( ",.kmm"+voter[0])
}

// const names = [];
// for (let i = 0; i < voter.length; i++) {
//   names.push(voter[i].Name);
// }

//console.log(names);

 // console.log( ",.kmm"+voter[0])
 var names ;
 if (Array.isArray(voter)) {
 names = [];
for (let i = 0; i < voter.length; i++) {
  names.push(voter[i].Name);
}


} else {
  console.log('voter is not an array');
}
console.log(names)

  const handleVote = async  () => {
    
console.log(names);
    if (hasVoted) {
      alert('You have already voted.');
      return;
    }
    if (!selectedCandidate) {
      alert('Please select a candidate before voting.');
      return;
    }
    if (names.includes(selectedCandidate)) {
      alert('You are not eligible to vote for this candidate.');
      return;
    }
  
    // Perform the voting logic here
    // You can make an API request to the server to record the vote

    setHasVoted(true);
    console.log(selectedCandidate)
    alert('Thank you for voting!');
   // const userId = JSON.parse(localStorage.getItem('user'))._id;
   const auth = localStorage.getItem('user');
   const admin =  JSON.parse(auth).name
   console.log("asdd"+admin)
    let result = await fetch("http://localhost:5000/add" , {
        method : 'post',
        body: JSON.stringify({ Voter: selectedCandidate , Name:admin }),
        headers : {
            "Content-Type" : "application/json"
        }
       });
       result = await result.json();
      console.log(result)

  };

  return (
    <div className="App">
      <h1>Voting Page</h1>
      <div>
        <h2>Select a candidate:</h2>
        {candidates.map((candidate, index) => (
          <label key={index}>
            <input
              type="radio"
              value={candidate}
              checked={selectedCandidate === candidate}
              onChange={() => setSelectedCandidate(candidate)}
              disabled={hasVoted}
            />
            
            {candidate}
            <br/>
          </label>
        ))}
      </div>
      <button onClick={handleVote} disabled={hasVoted}>
        Vote
      </button>
    </div>
  );
}
export default Voting;
