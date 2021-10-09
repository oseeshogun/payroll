import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppIcon from "../../AppIcon/AppIcon";
import { KeyboardArrowDown, Notifications } from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useHistory } from "react-router-dom";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: 400,
  p: 4,
};

interface Props {
  onUpdate: () => void
}

function DashBoardNavBar(args: Props) {
  const [openModal, setOpenModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAddClose = () => {
    setOpenModal(true);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [alert, setAlert] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [postname, setPostname] = useState<string>("");
  const [prename, setPrename] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [poste, setPoste] = useState<string>("");
  const [classsification, setClassification] = useState<string>("");
  const [birthday, setBirthday] = useState<Date | null>(null);

  const history = useHistory();

  const onSaveEmploye = () => {
    setAlert("");
    if (name.trim().length === 0) {
      setAlert("Mettez le nom de l'employé");
    } else if (prename.trim().length === 0) {
      setAlert("Mettez le prénom de l'employé");
    } else if (nationality.trim().length === 0) {
      setAlert("Mettez la nationalité de l'employé");
    } else if (poste.trim().length === 0) {
      setAlert("Mettez le poste de l'employé");
    } else if (birthday === null) {
      setAlert("Mettez la dare de naissance de l'employé");
    } else {
      const oldEmployees = JSON.parse(
        localStorage.getItem("employees") || "[]"
      );
      localStorage.setItem(
        "employees",
        JSON.stringify([
          ...oldEmployees,
          {
            name,
            prename,
            nationality,
            poste,
            birthday,
            classsification,
            postname,
          },
        ])
      );
      setOpenModal(false);
      args.onUpdate();
    }
  };

  return (
    <Container className="flex space-between">
      <AppIcon />
      <div className="flex">
        <Button
          className="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="outlined"
          onClick={() => {
            history.push("/");
          }}
        >
          Mon entreprise
        </Button>
        <Button
          className="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="outlined"
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          Mes employés
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleAddClose}>Ajouter</MenuItem>
          <MenuItem onClick={() => {
            history.push("/lists");
            handleClose();
          }}>Liste</MenuItem>
        </Menu>

        <Notifications />

        <Avatar
          id="avatar"
          alt="admin"
          src="https://randomuser.me/api/portraits/med/men/75.jpg"
        />
        <h5>Jimmie Stephens</h5>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajouter un employé
          </Typography>
          <br />
          <br />
          {alert.trim().length !== 0 && (
            <div>
              <Alert severity="error">{alert}</Alert>
              <br />
              <br />
            </div>
          )}
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div style={{ display: "flex" }}>
            <TextField
              style={{ marginRight: "10px" }}
              label="Nom"
              variant="outlined"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              label="Postnom"
              variant="outlined"
              value={postname}
              onChange={(event) => setPostname(event.target.value)}
            />
          </div>
          <br />
          <br />
          <TextField
            label="Prénom"
            fullWidth={true}
            variant="outlined"
            value={prename}
            onChange={(event) => setPrename(event.target.value)}
          />
          <br />
          <br />
          <TextField
            label="Nationalité"
            fullWidth={true}
            variant="outlined"
            value={nationality}
            onChange={(event) => setNationality(event.target.value)}
          />
          <br />
          <br />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date de naissance"
              value={birthday}
              onChange={(newValue) => {
                setBirthday(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <TextField
              style={{ marginRight: "10px" }}
              label="Poste"
              fullWidth={true}
              variant="outlined"
              value={poste}
              onChange={(event) => setPoste(event.target.value)}
            />
            <TextField
              label="Classification"
              fullWidth={true}
              variant="outlined"
              value={classsification}
              onChange={(event) => setClassification(event.target.value)}
            />
          </div>
          <br />
          <br />
          <Button
            aria-controls="basic-menu"
            aria-haspopup="true"
            variant="contained"
            onClick={onSaveEmploye}
          >
            Enregistrer
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default DashBoardNavBar;
