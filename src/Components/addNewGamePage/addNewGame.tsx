import React, { useState } from "react";
import './addNewGame.css';
import { Step, StepLabel, Stepper, TextField, Button, Avatar, Autocomplete, StepConnector } from "@mui/material";




interface AddNewGamePageProps {
  username: string;
  userImgUrl: string;
}

const AddNewGamePage: React.FC<AddNewGamePageProps> = ({ username, userImgUrl }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [genres, setGenres] = useState('');
  const [titleImg, setTitleImg] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [discord, setDiscord] = useState('');
  const [download, setDownload] = useState('');
  const [activeStep, setActiveStep] = useState(0);










  const steps = ["GAME DETALIS", "SOCIAL LINKS", "UPLOAD GAME"];



  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };


  const handleClose = () => {
    const formContainer = document.querySelector('.form-container');
    const modalDiv = document.querySelector('.modal');
    if (formContainer && modalDiv) {
      formContainer.removeChild(modalDiv);
    }
  };










  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const message = document.createElement('p');
    message.textContent = 'The game has been uploaded successfully!!';
    modalContent.appendChild(message);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', handleClose);
    modalContent.appendChild(closeButton);

    modalDiv.appendChild(modalContent);

    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
      formContainer.appendChild(modalDiv);
    }


  };




  return (


    <div className="form-container">



      <form onSubmit={handleSubmit}>


      <Stepper id="stepper" activeStep={activeStep} alternativeLabel className="custom-stepper"   sx={{  color: "white;"}}>
        {steps.map((label)  => (
          <Step  key={label}  >
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>



        <div className="header">
          <h1>Welcome, {username}</h1>
          <Avatar alt="Remy Sharp" sx={{ width: 100, height: 100 }} src={userImgUrl} />
        </div>






        {activeStep === 0 && (

          <div className="page1">
            <div className="text-field-container">
              <h3>CREATE YOUR GAME </h3>


              <TextField
                id="standard-basic"
                label="Title"
                value={title}

                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Image URL"
                value={imageUrl}

                onChange={(e) => setImageUrl(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Description"
                value={description}

                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Price"
                value={price}

                onChange={(e) => setPrice(e.target.value)}
              />
              <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                options={[
                  { title: 'Action' },
                  { title: 'Horror' },
                  { title: 'Adventure' },
                  { title: 'Strategy' },
                  { title: 'Military' },
                  { title: 'Sports' },
                ]}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Genres"
                    value={genres}

                    onChange={(e) => setGenres(e.target.value)}
                  />
                )}
              />
              <TextField
                id="standard-basic"
                label="Title Image"
                value={titleImg}

                onChange={(e) => setTitleImg(e.target.value)}
              />
            </div>
          </div>





        )}

        {activeStep === 1 && (
          <div className="page2">
            <div className="text-field-container">
              <h3>SOCIAL LINKS </h3>

              <TextField
                id="standard-basic"
                label="Facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Youtube"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Discord"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
              />

            </div>
          </div>

        )}

        {activeStep === 2 && (
          <div className="page3">
            <div className="text-field-basic_Download">
              <h3>UPLOAD YOUR GAME </h3>


              <TextField
                id="standard-basic"
                label="Download"
                value={download}
                onChange={(e) => setDownload(e.target.value)}
              />

            </div>
          </div>
        )}


        <div className="button-container">
          <Button id="btn" disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            sx={{ backgroundColor: '#f0f0f0' , color:"black"}}
          >
            Next
          </Button>
          {activeStep === steps.length - 1 && (
            <Button id="btn" type="submit" variant="contained" color="primary" 
            sx={{ backgroundColor: '#f0f0f0' , color: "black"}}>
              Add Game
            </Button>
          )}
        </div>




      </form>
    </div>




  );
};

export default AddNewGamePage;




