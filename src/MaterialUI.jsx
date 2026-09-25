
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

import { createSvgIcon } from '@mui/material/utils';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);
const PlusIcon = createSvgIcon(
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);

function MaterialUI() {
  let handleClick = () => {
    console.log("btn was cliked!");

  };

  return (
    <>
      <h1>Material ui demo</h1>
      <Button onClick={handleClick} variant="contained" size="small" color="success">Click me!</Button> &nbsp;&nbsp;
      <Button onClick={handleClick} variant="contained" disabled size="medium">Click me-2!</Button>  &nbsp;&nbsp;
      <Button onClick={handleClick} variant="contained" size="large" color="error">Click me-3!</Button>  &nbsp;&nbsp;
      <Button onClick={handleClick} variant="contained" size="small" color="success" startIcon={<DeleteIcon />}>Delete me!</Button> &nbsp;&nbsp;
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
      <HomeIcon />
      <PlusIcon color="secondary" />
    </>
  )
}

export default MaterialUI
