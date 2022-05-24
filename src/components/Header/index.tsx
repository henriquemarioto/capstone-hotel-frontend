import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import {HeaderDiv} from "./style"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import LogoutIcon from "@mui/icons-material/Logout"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import {useHistory} from "react-router-dom"
import {useState} from "react"

const drawerWidth = 240

const Header = (props: Props) => {
  const history = useHistory()
  const {window} = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div style={{backgroundColor: "#470024", height: "100vh"}}>
      <Toolbar sx={{display: "flex", justifyContent: "flex-end"}}>
        <MenuIcon />
      </Toolbar>
      <Divider sx={{backgroundColor: "white"}} />
      <List>
        <ListItemButton
          sx={{marginBottom: "5px", color: "white"}}
          onClick={() => history.push("/")}
        >
          Clients
        </ListItemButton>
        <Divider sx={{backgroundColor: "white"}} />
        <ListItemButton
          sx={{marginBottom: "5px", marginTop: "5px", color: "white"}}
          onClick={() => history.push("/")}
        >
          Bedrooms
        </ListItemButton>
        <Divider sx={{backgroundColor: "white"}} />
        <ListItemButton
          sx={{marginBottom: "5px", marginTop: "5px", color: "white"}}
          onClick={() => history.push("/")}
        >
          Contracts
        </ListItemButton>
        <Divider sx={{backgroundColor: "white"}} />
        <ListItemButton
          sx={{marginBottom: "5px", marginTop: "5px", color: "white"}}
          onClick={() => history.push("/services")}
        >
          Services
        </ListItemButton>
        <Divider sx={{backgroundColor: "white"}} />
        <ListItemButton
          sx={{marginTop: "5px", color: "white"}}
          onClick={() => history.push("/")}
        >
          Employees
        </ListItemButton>
        <Divider sx={{backgroundColor: "white"}} />
        <ListItemButton
          sx={{marginTop: "5px", color: "white"}}
          onClick={() => history.push("/")}
        >
          Log out
          <LogoutIcon sx={{marginLeft: "5px"}} />
        </ListItemButton>
      </List>
      <Divider sx={{backgroundColor: "white"}} />
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <HeaderDiv>
      <div className="container">
        <div className="col-left">
          <h1>Hotel Capstone</h1>
        </div>
        <nav>
          <ul className="col-right">
            <li onClick={() => history.push("/")}>Clients</li>
            <li onClick={() => history.push("/")}>Bedrooms</li>
            <li onClick={() => history.push("/")}>Contracts</li>
            <li onClick={() => history.push("/services")}>Services</li>
            <li onClick={() => history.push("/")}>Employees</li>
          </ul>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ml: 2, display: {sm: "none"}}}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component="nav"
            sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: {xs: "block", sm: "none"},
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              anchor="right"
            >
              {drawer}
            </Drawer>
          </Box>
        </nav>
      </div>
    </HeaderDiv>
  )
}

export default Header
