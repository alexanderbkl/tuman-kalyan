import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import hookahdrawing from './assets/hookahdrawing.png';
import tumankalyan from './assets/tumankalyan.png';
import kolba from './assets/kolba.png';
import shahta from './assets/shahta.webp';
import chashi from './assets/chashi.png';
import hose from './assets/hose.png';
import clean from './assets/clean.png';
import coal from './assets/coal.png';
import musthave from './assets/musthave.png'
import spectrum from './assets/spectrum.png'
import darkside from './assets/darkside.png'
import sebero from './assets/sebero.png'
import starline from './assets/starline.png'
import endorphin from './assets/endorphin.png'
import brusko from './assets/brusko.png'
import venom from './assets/venom.webp'


function App() {

  const [snackState, setSnackState] = React.useState({
    openSnack: true,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const { vertical, horizontal, openSnack } = snackState;



  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackState({ ...snackState, openSnack: false });
  };

  //get localstorage visited value
  const visitedLocalStorage = localStorage.getItem('visited');
  //check if visited is undefined
  if (visitedLocalStorage === null) {
    //if undefined set visited to false
    localStorage.setItem('visited', false);
  }
  var openState;

  if (visitedLocalStorage === 'true') {
    openState = false;
  } else {
    openState = true;
  }

  const [open, setOpen] = React.useState(openState);




  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    //save to local storage
    window.localStorage.setItem('visited', true);

    setOpen(false);
  };

  const handleExit = () => {
    window.location.href = "https://yandex.ru/maps/org/tuman_kalyan/24414423679/?ll=33.464984%2C44.574132&z=13";
  }

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const sx = {
    '&:hover': {
      opacity: [0.9, 0.8, 0.7],
    },
    textTransform: 'none',
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }

  async function logoClick() {
    window.location.replace("/");
  };


  return (
    <div className="App">



      <header className="App-header">
      
       
      </header>


      <div className="App-body">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }} id="background" className="isLoaded">
          <img style={{ height: '90vh', maxWidth: '100%' }} src={hookahdrawing} alt="hookah" />
          <img style={{ height: '5vh', marginBottom: '5vh' }} src={tumankalyan} alt="hookah" />
        </div>
        <Box id="overlay" sx={{
          width: '100%',
          typography: 'body1',

        }} >
          <TabContext value={value}>

            <Box sx={{
              borderBottom: 1,
              borderColor: 'divider',
              '& .MuiTabs-indicator': {
                maxWidth: 100,
                width: '100%',
                alignSelf: 'center',
                backgroundColor: '#635ee7',
              },
              position: 'relative'

            }}>
              <div style={{ cursor: 'pointer', position: 'absolute', width: '50px', height: '50px' }} onClick={() => logoClick()}>
                <svg style={{ position: 'absolute', left: 0, top: 0 }} xmlns="http://www.w3.org/2000/svg" width="35pt" height="35pt" version="1.1" viewBox="0 0 752 752">
                  <g fill="#000">
                    <path d="m382.7 210.14h-36.844c-24.766 0-28.672-16.051-28.828-16.734v0.003906c-0.16797-0.74219-0.13281-1.5156 0.10156-2.2383 2.6992-8.3281 12.176-13.656 28.152-15.836 3.125-0.42578 6.1914-0.69141 8.9805-0.84766l0.003906 0.003907c-2.0898-2.4688-3.832-5.2109-5.1836-8.1484-1.7305-3-2.0273-6.6172-0.80469-9.8594 1.6758-3.3516 7.4727-8.9727 27.48-8.9727v8.4648c-12.727 0-18.719 2.707-19.797 4.1172 0.59766 2.793 1.8672 5.3984 3.6992 7.5898 1.9922 3.0234 4.8125 5.4023 8.1289 6.8516 2.0781 0.57812 3.3867 2.6328 3.0391 4.7617s-2.2461 3.6562-4.3984 3.5391c-6.7188-0.25781-13.445 0.042968-20.113 0.90234-11.055 1.5234-18.281 4.6406-20.621 8.8555 1.2656 2.6602 5.8086 9.0859 20.156 9.0859h36.844z" />
                    <path d="m359.72 174.38h32.559v8.4609h-32.559z" />
                    <path d="m362.64 205.91h8.4609v88.836h-8.4609z" />
                    <path d="m362.64 341.55h8.4609v78.004h-8.4609z" />
                    <path d="m375.76 345.78c-7.3281 0-14.359-2.9102-19.539-8.0938-5.1836-5.1836-8.0938-12.211-8.0938-19.539 0-7.3281 2.9102-14.355 8.0938-19.539 5.1797-5.1797 12.207-8.0938 19.535-8.0938s14.359 2.9141 19.539 8.0938c5.1836 5.1836 8.0938 12.211 8.0938 19.539-0.007813 7.3242-2.9219 14.348-8.1016 19.531-5.1797 5.1797-12.203 8.0938-19.527 8.1016zm0-46.801v-0.003907c-5.0859 0-9.9609 2.0195-13.559 5.6172-3.5938 3.5938-5.6133 8.4727-5.6133 13.555 0 5.0859 2.0195 9.9609 5.6133 13.555 3.5977 3.5977 8.4727 5.6172 13.559 5.6172 5.082 0 9.9609-2.0195 13.555-5.6172 3.5938-3.5938 5.6133-8.4727 5.6133-13.555-0.003906-5.082-2.0273-9.957-5.6211-13.551s-8.4648-5.6133-13.547-5.6211z" />
                    <path d="m360.81 453.97c-4.625-4.2109-7.2617-10.176-7.2695-16.434 0.34766-6.0352 3-11.707 7.4102-15.844 4.4102-4.1367 10.246-6.4141 16.293-6.3711v8.4648c-3.8086-0.046875-7.4883 1.3438-10.312 3.8906-2.8242 2.5508-4.5859 6.0703-4.9297 9.8633 0.003906 3.8711 1.6406 7.5664 4.5 10.176z" />
                    <path d="m377.24 467.55h-16.219c-2.9727 0.078125-5.832-1.1484-7.8203-3.3555-2.707-3.7773-3.8906-8.4336-3.3164-13.043 0.23828-2.1406 2.0508-3.7617 4.2031-3.7617h23.152v8.457h-18.793c0.11328 0.97656 0.48047 1.9102 1.0625 2.7031 0.38672 0.41406 0.94922 0.61328 1.5117 0.53516h16.219z" />
                    <path d="m368.64 604.49c-10.602 1.0039-21.266-1.0469-30.738-5.9062-14.586-7.957-18.086-20.555-10.695-38.5 1.9297-4.6875 5.4922-11.906 9.6133-20.27v-0.003906c8.5195-15.121 15.223-31.199 19.973-47.895v-28.605h8.4609v28.605c-4.3203 18.16-11.348 35.57-20.844 51.637-4.0547 8.2188-7.5547 15.32-9.375 19.742-5.75 13.965-3.7422 22.031 6.9219 27.852v0.003906c8.7422 4.3086 18.543 6 28.223 4.875h11.152v8.4609h-12.691z" />
                    <path d="m357.35 433.75c-1.0703 0-2.1016-0.40625-2.8867-1.1367l-37.676-35.156c-1.707-1.5977-1.8008-4.2734-0.20703-5.9805l7.5352-8.0742c1.5938-1.707 4.2695-1.8008 5.9805-0.20703l37.676 35.156c1.707 1.5938 1.7969 4.2734 0.20312 5.9805l-7.5352 8.0742h0.003906c-0.76562 0.82031-1.8281 1.3008-2.9492 1.3398zm-31.695-39.59 31.488 29.383 1.7617-1.8906-31.496-29.383z" />
                    <path d="m318 400.39c-0.73828 0-1.4609-0.19141-2.1016-0.55859l-12.398-7.0938v-0.003906c-1.1211-0.64062-1.8867-1.7617-2.0781-3.0391-0.19531-1.2773 0.20703-2.5742 1.0898-3.5195l15.344-16.445c0.87891-0.94141 2.1445-1.4336 3.4336-1.3281 1.2891 0.10547 2.457 0.79297 3.1758 1.8672l7.9336 11.879c1.0898 1.6328 0.91406 3.8008-0.42578 5.2344l-10.883 11.66 0.003906 0.003906c-0.80078 0.85547-1.9219 1.3438-3.0938 1.3438zm-5.6602-12.344 4.8516 2.7773 6.3086-6.7617-3.0977-4.6523z" />
                    <path d="m303.39 528.7h-0.22656c-6.5586 0.38672-13.059-1.4023-18.496-5.0898s-9.5039-9.0664-11.57-15.301c-2.3008-6.625-2.6133-13.777-0.90625-20.578 1.7109-6.8008 5.3672-12.953 10.527-17.703l5.168 6.6992c-3.7656 3.6641-6.4062 8.3281-7.6094 13.445-1.1992 5.1133-0.91016 10.469 0.83594 15.422 1.5 4.5703 4.4961 8.5 8.5039 11.156 4.0078 2.6562 8.793 3.8828 13.586 3.4844 8.9531 0.44531 17.605-3.3008 23.41-10.133 8.8906-12.828 11.926-28.828 8.3516-44.02-6.2695-25.465-24.613-46.246-49.105-55.621-20.613-10.609-32.766-22.582-35.141-34.633-1.3398-6.7148 0.57422-13.664 5.1602-18.746 3.3242-4.0078 8.1758-6.4336 13.379-6.6875 12.574 1.2188 24.352 6.7109 33.363 15.566 4.7539 4.2578 8.9766 9.0703 12.59 14.332l-7.1094 4.5859h-0.003906c-3.2227-4.6367-6.9688-8.8828-11.168-12.656-7.3086-7.3555-16.855-12.062-27.141-13.383-2.9102 0.125-5.6328 1.4883-7.4766 3.7422-2.8945 3.1211-4.1211 7.4414-3.293 11.617 1.8281 9.2891 12.734 19.5 30.707 28.742 14.055 6.7344 26.672 16.125 37.156 27.652 8.4805 9.6094 14.156 21.367 16.406 33.984 4.0117 17.668 0.30078 36.203-10.199 50.969-7.3789 8.6758-18.312 13.52-29.699 13.152z" />
                    <path d="m281.31 485.49c-1.0664 0-2.0938-0.40234-2.875-1.125l-3.6953-3.4219c-1.3164-1.2227-1.7227-3.1406-1.0039-4.7891 1.8867-4.0352 4.3867-7.7539 7.4062-11.031 3.5859-3.5508 7.3477-6.918 11.273-10.09 3.5352-2.9844 7.5469-6.3711 8.7656-7.8008 0.58203-0.64062 1.0898-1.3477 1.5195-2.1016 0.097656-1.6289 1.1289-3.0586 2.6445-3.668s3.2461-0.29297 4.4453 0.8125l4.4922 4.1562c1.1992 1.1133 1.6523 2.8164 1.1602 4.375-0.49219 1.5586-1.8359 2.6953-3.457 2.918-0.71875 0.48828-1.3789 1.0508-1.9766 1.6797-1.332 1.3242-4.3984 5.5898-7.1055 9.3438-2.8594 4.1562-5.9258 8.1641-9.1875 12.008-3.0312 3.2656-6.5508 6.0469-10.426 8.2422-0.60938 0.32422-1.2891 0.49219-1.9805 0.49219zm7.8477-16.418-1.8086 1.8008-1.6953 1.9883 1.8516-1.8438z" />
                    <path d="m406.15 210.14h-28.168v-8.4609h28.168c14.348 0 18.891-6.4258 20.156-9.0859-2.3359-4.2148-9.5664-7.3359-20.621-8.8555h0.003906c-6.668-0.85938-13.395-1.1602-20.113-0.90625-2.1562 0.11328-4.0508-1.4102-4.3984-3.5391-0.34766-2.1328 0.96094-4.1797 3.0391-4.7617 3.3125-1.4492 6.1367-3.8281 8.125-6.8516 1.832-2.1914 3.1055-4.7969 3.7031-7.5938-1.0781-1.4102-7.0703-4.1094-19.797-4.1094v-8.4648c20.004 0 25.801 5.6211 27.477 8.9727h0.003906c1.2227 3.2422 0.92578 6.8633-0.80859 9.8633-1.3477 2.9375-3.0898 5.6797-5.1797 8.1445 2.7891 0.15625 5.8516 0.42187 8.9805 0.84766 15.98 2.1797 25.453 7.5078 28.156 15.832 0.23438 0.72266 0.26953 1.4961 0.10156 2.2344-0.15625 0.68359-4.0625 16.734-28.828 16.734z" />
                    <path d="m380.9 205.91h8.4609v88.836h-8.4609z" />
                    <path d="m380.9 341.55h8.4609v78.004h-8.4609z" />
                    <path d="m376.25 345.78c-7.3281 0-14.355-2.9102-19.539-8.0938-5.1797-5.1836-8.0898-12.211-8.0938-19.539 0-7.3281 2.9141-14.355 8.0938-19.539 5.1836-5.1797 12.211-8.0938 19.539-8.0938s14.355 2.9141 19.539 8.0938c5.1797 5.1836 8.0938 12.211 8.0938 19.539-0.007812 7.3242-2.9219 14.348-8.1016 19.527-5.1797 5.1836-12.203 8.0977-19.531 8.1055zm0-46.801v-0.003907c-5.082 0-9.9609 2.0195-13.555 5.6172-3.5938 3.5938-5.6172 8.4727-5.6172 13.555 0.003906 5.0859 2.0234 9.9609 5.6172 13.555 3.5938 3.5977 8.4727 5.6172 13.555 5.6172 5.0859 0 9.9609-2.0195 13.559-5.6172 3.5938-3.5938 5.6133-8.4727 5.6133-13.555-0.007813-5.082-2.0273-9.957-5.6211-13.551s-8.4688-5.6133-13.551-5.6211z" />
                    <path d="m391.2 453.97-5.6953-6.2578c4.2031-3.8203 5.6211-9.8359 3.5742-15.133-2.0508-5.3008-7.1445-8.793-12.828-8.793v-8.4648c6.0156 0.003907 11.77 2.4414 15.953 6.7578 4.1836 4.3164 6.4375 10.148 6.25 16.156-0.19141 6.0078-2.8047 11.684-7.2539 15.73z" />
                    <path d="m390.98 467.55h-14.734v-8.4609h14.734c0.5625 0.082031 1.1289-0.12109 1.5156-0.53906 0.58203-0.79297 0.94531-1.7266 1.0586-2.7031h-17.309v-8.457h21.668c2.1562 0 3.9688 1.6211 4.207 3.7617 0.57031 4.6094-0.61328 9.2656-3.3164 13.043-1.9922 2.207-4.8516 3.4336-7.8242 3.3555z" />
                    <path d="m383.36 604.49h-3.2188v-8.4648h1.6719c9.6797 1.125 19.48-0.56641 28.227-4.875 10.668-5.8203 12.672-13.891 6.9219-27.852-1.8203-4.4258-5.3203-11.523-9.375-19.742l-0.003906-0.003906c-9.4961-16.07-16.523-33.477-20.844-51.637v-28.605h8.4609v28.605h0.003906c4.7461 16.695 11.449 32.773 19.969 47.895 4.1211 8.3594 7.6797 15.578 9.6133 20.27 7.3867 17.949 3.8945 30.543-10.695 38.5-9.4688 4.8633-20.133 6.9141-30.73 5.9102z" />
                    <path d="m394.65 433.75h-0.14453c-1.1211-0.039062-2.1836-0.52344-2.9492-1.3438l-7.5352-8.0742c-1.5938-1.7109-1.5-4.3867 0.20703-5.9805l37.676-35.156c1.707-1.5938 4.3867-1.5 5.9805 0.20703l7.5352 8.0742h-0.003906c1.5977 1.707 1.5039 4.3828-0.20312 5.9766l-37.676 35.156c-0.78516 0.73438-1.8164 1.1406-2.8867 1.1406zm-1.5547-12.098 1.7617 1.8867 31.488-29.383-1.7578-1.8867z" />
                    <path d="m434 400.39c-1.1758 0-2.2969-0.48828-3.0977-1.3438l-10.879-11.664c-1.3398-1.4336-1.5156-3.6016-0.42578-5.2344l7.9336-11.879c0.71875-1.0742 1.8867-1.7617 3.1758-1.8672 1.2891-0.10547 2.5547 0.38672 3.4336 1.3281l15.344 16.445c0.88281 0.94531 1.2852 2.2422 1.0898 3.5195-0.19141 1.2773-0.95703 2.3984-2.0781 3.0391l-12.398 7.0938v0.003906c-0.64062 0.36328-1.3633 0.55859-2.0977 0.55859zm-5.5039-16.328 6.3086 6.7617 4.8516-2.7773-8.0586-8.6367z" />
                    <path d="m448.61 528.7c-11.387 0.36719-22.32-4.4766-29.703-13.156-10.5-14.762-14.207-33.301-10.195-50.965 2.25-12.621 7.9258-24.375 16.406-33.988 10.484-11.527 23.102-20.918 37.156-27.648 17.973-9.2461 28.879-19.453 30.707-28.742v-0.003906c0.82812-4.1758-0.39453-8.4922-3.293-11.613-1.8438-2.2578-4.5625-3.6172-7.4766-3.7422-10.281 1.3164-19.832 6.0273-27.141 13.379-4.2031 3.7695-7.9492 8.0156-11.164 12.652l-7.1172-4.5781c3.6133-5.2617 7.8359-10.074 12.59-14.332 9.0117-8.8555 20.793-14.348 33.367-15.566 5.2031 0.25391 10.059 2.6797 13.379 6.6914 4.5898 5.082 6.5039 12.031 5.1641 18.746-2.3711 12.051-14.523 24.027-35.141 34.633-24.492 9.375-42.84 30.156-49.109 55.621-3.5703 15.195-0.53516 31.191 8.3555 44.02 5.8047 6.832 14.453 10.574 23.406 10.133 4.793 0.39844 9.5781-0.82812 13.586-3.4844 4.0078-2.6562 7.0039-6.5859 8.5039-11.156 1.7461-4.9531 2.0391-10.309 0.83594-15.422-1.1992-5.1172-3.8398-9.7812-7.6094-13.445l5.168-6.6992h0.003906c5.1562 4.75 8.8164 10.902 10.527 17.703 1.707 6.8008 1.3906 13.953-0.91016 20.578-2.0664 6.2344-6.1328 11.613-11.57 15.297-5.4375 3.6875-11.941 5.4766-18.496 5.0898z" />
                    <path d="m470.69 485.49c-0.6875 0-1.3672-0.16797-1.9766-0.48828-3.8789-2.1992-7.3945-4.9766-10.43-8.2422-3.2617-3.8477-6.3281-7.8555-9.1875-12.012-2.7031-3.7578-5.7695-8.0156-7.1055-9.3438l0.003906 0.003906c-0.59766-0.62891-1.2617-1.1914-1.9766-1.6797-1.6211-0.22266-2.9648-1.3594-3.457-2.918s-0.039062-3.2617 1.1562-4.375l4.4883-4.1602c1.2031-1.1094 2.9336-1.4297 4.4531-0.82031 1.5195 0.60938 2.5469 2.0391 2.6445 3.6758 0.43359 0.75 0.94141 1.4531 1.5234 2.0938 1.2227 1.4297 5.2305 4.8125 8.7656 7.8008 3.9258 3.1719 7.6875 6.5391 11.273 10.09 3.0195 3.2773 5.5156 6.9961 7.4062 11.031 0.71484 1.6484 0.3125 3.5703-1.0078 4.7891l-3.6953 3.4219h0.003907c-0.78516 0.73047-1.8125 1.1328-2.8828 1.1328zm-7.8477-16.418 1.6523 1.9414 1.8516 1.8438-1.6953-1.9883z" />
                  </g>
                </svg>
              </div>
              <TabList style={{ zIndex: '100' }}
                onChange={handleChange} aria-label="lab API tabs example" centered>
                <Tab sx={sx} style={{ zIndex: '100' }}
                  label="Главная" value="1" />
                <Tab sx={sx} style={{ zIndex: '100' }} label="Ассортимент" value="2" />
                <Tab sx={sx} style={{ zIndex: '100' }} label="Адрес" value="3" />
              </TabList>
              <Dialog
                fullScreen={false}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                style={{ backgroundColor: 'rgba(155,155,100,0.5)' }}
              >
                <DialogTitle style={{ textAlign: 'center', backgroundColor: 'rgba(195,195,100,0.5)' }}
                  id="responsive-dialog-title">
                  {"Tuman-Kalyan.ru"}
                </DialogTitle>
                <DialogContent style={{ backgroundColor: 'rgba(195,195,100,0.5)' }}
                >
                  <DialogContentText>
                    ВАМ УЖЕ ИСПОЛНИЛОСЬ 18 ЛЕТ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions style={{ backgroundColor: 'rgba(195,195,100,0.5)' }}
                >
                  <Button onClick={handleExit}>
                    Нет, я младше 18 лет
                  </Button>
                  <Button onClick={handleClose} autoFocus>
                    Да, мне есть 18 лет
                  </Button>
                </DialogActions>
              </Dialog>

            </Box>

            <Snackbar
              severity="success"
              anchorOrigin={{ vertical, horizontal }}
              open={openSnack}
              onClose={handleSnackClose}
              autoHideDuration={60000}
              key={vertical + horizontal}
            >

              <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
                <u>Акция!!!</u>
                <br />
                Забери свой подарок!<br />
                <b>Условия акции:</b>
                <br />Приобрети кальян и получи набор табаков в подарок!
              </Alert>
            </Snackbar>


            <div style={{ position: 'absolute', left: '0', top: '0', display: 'flex', alignContent: 'center', justifyContent: 'center', width: '100%' }}>

              <TabPanel style={{ heigh: '100%' }} value="1">
                <div style={{ textAlign: 'justify' }}>
                  <h1 style={{ marginTop: '50px', textAlign: 'center' }}><u>Туман-Кальян</u></h1>
                  <p>Магазин Туман-Кальян то самое место, которое Вы полюбите за оптимальное соотношение цены и качества.<br /> А изобилие и разнообразие Кальянов, Табаков, Аксессуаров, Электронных сигарет, Жидкостей к электронкам не оставят равнодушным даже самого требовательного покупателя.</p>

                  <p></p>

                  <p>Наша команда уже 7 лет радует клиентов отменным качеством и последними новинками кальянной и табачной продукции.<br />Приходите к нам и насладитесь дружеским отношением и грамотной консультацией лучших продавцов.<br /> Мы с удовольствием поможем выбрать табачную и сувенирную продукцию, которая порадует Вас полным соответствием ожиданиям. Наша цель - довольный клиент, который обратится к нам снова!</p>

                  <h1 id="subtitle">Почему наши клиенты выбирают Туман-Кальян?</h1>

                  <p>·Удобное месторасположение (парковка, остановка общественного транспорта).</p>

                  <p>·Индивидуальный подход к каждому покупателю.</p>

                  <p>·Самое выгодное в городе соотношение цены и качества продукции.</p>

                  <p>·Широкий ассортимент кальянов, табачной продукции, электронных сигарет, жидкостей, а также аксессуаров и всевозможных расходных материалов.</p>

                  <p>·Возможность индивидуального заказа продукции из каталога по Вашим личным предпочтениям и доставка его в кратчайшие сроки.</p>

                  <p>·Система гибких скидок для постоянных клиентов магазина Туман-Кальян.</p>
                </div>

              </TabPanel>
              <TabPanel id="tabpanel2" value="2">
                <h3 style={{ marginTop: '50px' }}>КАЛЬЯНЫ</h3>
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                    <div className="product">
                      <p><b>Колбы</b></p>
                      <img className='productimg' src={kolba} alt="Колбы"></img>
                    </div>
                    <div className="product" >
                      <p><b>Шахты</b></p>
                      <img className='productimg' src={shahta} alt="Шахты"></img>
                    </div>
                    <div className="product" >
                      <p><b>Чаши</b></p>
                      <img className='productimg' src={chashi} alt="Чаши"></img>
                    </div>
                    <div className="product" >
                      <p><b>Шланги</b></p>
                      <img className='productimg' src={hose} alt="шланги"></img>
                    </div>
                    <div className="product" >
                      <p><b>Средства для ухода</b></p>
                      <img className='productimg' src={clean} alt="Средства для ухода"></img>
                    </div>
                    <div className="product" >
                      <p><b>Уголь</b></p>
                      <img className='productimg' src={coal} alt="Уголь"></img>
                    </div>
                  </div>
                </div>
                <h3>ТАБАК ДЛЯ КАЛЬЯНА</h3>
                <div>









                  <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                    <div className="product">
                      <p><b>Must Have</b></p>
                      <img className='productimg' src={musthave} alt="musthave"></img>
                    </div>
                    <div className="product" >
                      <p><b>Spectrum</b></p>
                      <img className='productimg' src={spectrum} alt="spectrum"></img>
                    </div>
                    <div className="product" >
                      <p><b>Dark Side</b></p>
                      <img className='productimg' src={darkside} alt="darkside"></img>
                    </div>
                    <div className="product" >
                      <p><b>Sebero</b></p>
                      <img className='productimg' src={sebero} alt="sebero"></img>
                    </div>
                    <div className="product" >
                      <p><b>StarLine</b></p>
                      <img className='productimg' src={starline} alt="starline"></img>
                    </div>
                    <div className="product" >
                      <p><b>Endorphin</b></p>
                      <img className='productimg' src={endorphin} alt="endorphin"></img>
                    </div>
                    <div className="product" >
                      <p><b>BRUSKO</b></p>
                      <img className='productimg' src={brusko} alt="brusko"></img>
                    </div>
                    <div className="product" >
                      <p><b>Venom</b></p>
                      <img className='productimg' src={venom} alt="venom"></img>
                    </div>
                    <div className="product" >
                      <p><b>И прочие...</b></p>
                    </div>
                  </div>
                  <h3>ВЕЙПЫ</h3>
                  <ul>
                    <li><p>От 400 до 6000 тяг</p></li>
                    <li><p>С подзарядкой и без</p></li>
                    <li><p>Заправляющиеся</p></li>
                    <li><p>Со сменными картриджами</p></li>
                    <li><p>Жидкости для вейпов в огромном ассортименте</p></li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel style={{ position: 'absolute', top: '5vh', textAlign: 'center' }} value="3">
                <p>Севастополь, улица Александра Маринеско, 1б/2</p>
                <div title="embbed direction"
                  style={{ position: 'relative', overflow: 'hidden' }}>
                  <a href="https://yandex.com/maps/959/sevastopol/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Севастополь</a>
                  <a href="https://yandex.com/maps/959/sevastopol/house/vulytsia_oleksandra_marynesko_1b_2/Z0oYcgFkQE0DQFpufXl2dX1gZg==/?ll=33.464897%2C44.574136&utm_medium=mapframe&utm_source=maps&z=18.89" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Улица Александра Маринеско, 1б/2 — Яндекс Карты</a>
                  <iframe title="embed direction" src="https://yandex.com/map-widget/v1/-/CCUVu-Hl1A" width="350" height="450" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe>
                </div>
                <h1><a href="tel:+7 (978) 345-28-29">+7 (978) 345-28-29</a></h1>
              </TabPanel>

            </div>

          </TabContext>
        </Box>
        <p style={{ position: 'absolute', bottom: 0, right: 10, fontSize: '16px', color: 'black' }}>© Tuman-Kalyan.ru</p>
        <script src="./utils/gradient.js"></script>
      </div >
    </div >
  );
}

export default App;
