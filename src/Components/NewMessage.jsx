import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SendRoundedIcon from '@mui/icons-material/SendRounded';
import useFireBase from '../utils/useFireBase';
import { AddAPhoto, ChairOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Compressor from 'compressorjs';
import { useContext } from 'react';
import { UserContext } from '../utils/UserContextProvider';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


export default function NewMessage({chatId}) {

  const {name} = useContext(UserContext)

  const [, , AddMessage] = useFireBase(chatId);

  const AddNewMessage = (e) => {
    e.preventDefault();

    let mess = e.target[0].value;
    let images = e.target['images'].files[0];
    console.log('images', images)

    if (!!images) {

      if (images.type !== "image/jpeg" && images.type !== "image/jpg") {
        let messege = 'Invalide file type';
      }

      let reader = new FileReader();

      console.log('images', images);

      new Compressor(images, {
        quality: 0.2, // 0.6 can also be used, but its not recommended to go below.
        success: (compressedResult) => {
          // compressedResult has the compressed file.
          console.log('commprest', compressedResult)
          // Use the compressed file to upload the images to your server.        
          reader.readAsDataURL(compressedResult)

          reader.onloadend = (eFile) => {
            AddMessage(eFile.target.result,name);
          }
        },
      });
    }

    if (mess !== "") {
      AddMessage(mess,name);
    }


    e.target.reset();

  }



  return (
    <Paper
      component="form"
      sx={{
        bgcolor: 'primary.light',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: 'inherit',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: '4rem'
      }}
      onSubmit={AddNewMessage}
    >

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Your message"
        inputProps={{ 'aria-label': 'search google maps' }}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button
        component="label"
        role={undefined}
        tabIndex={-1}
        startIcon={<AddAPhoto />}
      >
        <VisuallyHiddenInput type="file" name='images' />
      </Button>
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" type='submit'>
        < SendRoundedIcon />
      </IconButton>
    </Paper>
  )
}
