import TextField from "@material-ui/core/TextField";
import React from "react";
import { Card, Grid } from "@material-ui/core";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Form() {
  return (
    <>
      <PageTitle title="Sample Form" />
      <Card>
        <form noValidate autoComplete="off">
          <div>
            <Grid
              spacing={12}
              container
              direction="row"
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid item sm={4}>
                <TextField
                  fullWidth
                  required
                  id="standard-required"
                  label="Required"
                  defaultValue="Hello World"
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  disabled
                  fullWidth
                  id="standard-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  fullWidth
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  fullWidth
                  id="standard-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid
              spacing={12}
              container
              direction="row"
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid item sm={4}>
                <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  disabled
                  id="filled-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="filled-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="filled-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                  fullWidth
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="filled-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="filled"
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid spacing={12} container>
              <Grid item sm={4}>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs sm={4}>
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs sm={4}>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs sm={4}>
                <TextField
                  id="outlined-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="outlined-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="outlined-search"
                  label="Search field"
                  type="search"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs>
                <TextField
                  id="outlined-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="outlined"
                  fullWidth
                />
              </Grid>{" "}
            </Grid>
          </div>
          <div>
            <TextField
              error
              id="standard-error"
              label="Error"
              defaultValue="Hello World"
            />
            <TextField
              error
              id="standard-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
            />
          </div>
          <div>
            <TextField
              error
              id="filled-error"
              label="Error"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              error
              id="filled-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="filled"
            />
          </div>
          <div>
            <TextField
              error
              id="outlined-error"
              label="Error"
              defaultValue="Hello World"
              variant="outlined"
            />
            <TextField
              error
              id="outlined-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>

          <div>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
        />
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          variant="outlined"
        />
      </div>

      <Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>
<Button
        variant="contained"
        color="secondary"
        
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="default"
        
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <Button
        variant="contained"
        disabled
        color="secondary"
        
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="text" color="primary" aria-label="text primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
        </form>
      </Card>
    </>
  );
}
