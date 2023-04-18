"use client";
import React, { useState, useContext } from "react";
// import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Button, DataGrid, GridToolbar, Input, Modal } from "@mui/material";
import IconButton from "@mui/material/IconButton";
// import Icon from "@mui/material/Icon";
import { Tabs, Tab, TabPanel } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness7";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Filter from "./components/filter/filter.js";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { blue, red } from "@mui/material/colors";
import { Close } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import CheckboxList from "./components/filter/CheckboxList";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import { border, fontWeight, padding } from "@mui/system";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LockIcon from "@mui/icons-material/Lock";
// import InputAdornment from "@mui/material/InputAdornment";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import Checkbox from "@mui/material/Checkbox";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#4b5563",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    border: "1px solid #4b5563",
    borderRadius: "0px",
    fontWeight: 500,
  },
}));

const listData = [
  {
    id: 1,
    lists: "General",
  },
  {
    id: 2,
    lists: "Filtered",
  },
  {
    id: 3,
    lists: "Dividends",
  },
  {
    id: 4,
    lists: "Performance",
  },
];
const inter = Inter({ subsets: ["latin"] });

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const items1 = [
  {
    id: 1,
    label: "Assets",
  },
  {
    id: 2,
    label: "Stock Price",
  },
  {
    id: 3,
    label: "Volume",
  },
  {
    id: 4,
    label: "Expense Ratio",
  },
  {
    id: 5,
    label: "PE Ratio",
  },
];
const items2 = [
  {
    id: 1,
    label: "Assets",
  },
  {
    id: 2,
    label: "Stock Price",
  },
  {
    id: 3,
    label: "Volume",
  },
  {
    id: 4,
    label: "Expense Ratio",
  },
  {
    id: 5,
    label: "PE Ratio",
  },
  {
    id: 6,
    label: "Assets",
  },
  {
    id: 7,
    label: "Stock Price",
  },
  {
    id: 8,
    label: "Volume",
  },
  {
    id: 9,
    label: "Expense Ratio",
  },
  {
    id: 10,
    label: "PE Ratio",
  },
  ,
  {
    id: 11,
    label: "PE Ratio",
  },
];
const items3 = [
  {
    id: 1,
    label: "Dividend ($)",
  },
  {
    id: 2,
    label: "Dividend Yield",
  },
  {
    id: 3,
    label: "Div. Growth",
  },
  {
    id: 4,
    label: "Payout Ratio",
  },
  {
    id: 5,
    label: "Payout Freq",
  },
  {
    id: 6,
    label: "Ex-Div Date",
  },
];
const items4 = [
  {
    id: 1,
    label: "Price Change 1D",
  },
  {
    id: 2,
    label: "Beta (1Y)",
  },
  {
    id: 3,
    label: "Price Change 1M",
  },
  {
    id: 4,
    label: "Price Change 6M",
  },
  {
    id: 5,
    label: "Price Change YTD",
  },
  {
    id: 6,
    label: "Price Change 1Y",
  },
  {
    id: 7,
    label: "Price Change 3Y",
  },
  {
    id: 8,
    label: "Price Change 5Y",
  },
  {
    id: 9,
    label: "Price Change 52W Low",
  },
  {
    id: 10,
    label: "Price Change 52W High",
  },
];
const items5 = [
  {
    id: 1,
    label: "Premarket Price",
  },
  {
    id: 2,
    label: "Premkt. % Chg.",
  },
  {
    id: 3,
    label: "After-Hours Price",
  },
  {
    id: 4,
    label: "Afterhr. % Chg.",
  },
  {
    id: 5,
    label: "Shares Out",
  },
  {
    id: 6,
    label: "Tag",
  },
];
const items6 = [
  {
    id: 1,
    label: "symbol",
  },
  {
    id: 2,
    label: "Campany Name",
  },
  {
    id: 3,
    label: "Assset Classs",
  },
  {
    id: 4,
    label: "Asssets Under Management",
  },
  {
    id: 5,
    label: "Stock Price",
  },
  {
    id: 6,
    label: "Price Change 1D (%)",
  },
  {
    id: 7,
    label: "Volume",
  },
  {
    id: 8,
    label: "Holdings",
  },
  {
    id: 9,
    label: "Average Volume",
  },
  {
    id: 10,
    label: "Relative Volume",
  },
  {
    id: 11,
    label: "Premarket Price",
  },
  {
    id: 12,
    label: "Premarket % Change",
  },
  {
    id: 13,
    label: "After-Hours Price",
  },

  {
    id: 14,
    label: "After-Hours % Change",
  },
  {
    id: 15,
    label: "Expense Ratio",
  },
  {
    id: 16,
    label: "Sector",
  },
  {
    id: 17,
    label: "Category",
  },
  {
    id: 18,
    label: "Issuer",
  },
  {
    id: 19,
    label: "Index",
  },
  {
    id: 20,
    label: "Inception Date",
  },
  {
    id: 21,
    label: "PE Ratio",
  },
  {
    id: 22,
    label: "Beta (1Y)",
  },
  {
    id: 23,
    label: "Dividend ($)",
  },

  {
    id: 24,
    label: "Dividend Yield",
  },
  {
    id: 25,
    label: "Dividend Growth",
  },
  {
    id: 26,
    label: "Payout Ratio",
  },
  {
    id: 27,
    label: "Payout Frequency",
  },
  {
    id: 28,
    label: "Ex-Div Date",
  },
  {
    id: 29,
    label: "Exchange",
  },
  {
    id: 30,
    label: "Region",
  },
  {
    id: 31,
    label: "Shares Out",
  },
  {
    id: 32,
    label: "Price Change 1M",
  },
  {
    id: 33,
    label: "Price Change 6M",
  },

  {
    id: 34,
    label: "Price Change YTD",
  },
  {
    id: 35,
    label: "Price Change 1Y",
  },
  {
    id: 36,
    label: "Price Change 3Y",
  },
  {
    id: 37,
    label: "Price Change 5Y",
  },
  {
    id: 38,
    label: "Price Change 52W Low",
  },
  {
    id: 39,
    label: "Price Change 52W High",
  },
];

export default function Table({ context, value }) {
  const theme = useTheme();
  const colorMode = useContext(context);
  const [activeTab, setActiveTab] = React.useState("1");
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("any");
  const [select, setSelect] = React.useState("");
  const [personName, setPersonName] = React.useState([]);
  // const navigate = useRouter();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // const names = [
  //   "Oliver Hansen",
  //   "Van Henry",
  //   "April Tucker",
  //   "Ralph Hubbard",
  //   "Omar Alexander",
  //   "Carlos Abbott",
  //   "Miriam Wagner",
  //   "Bradley Wilkerson",
  //   "Virginia Andrews",
  //   "Kelly Snyder",
  // ];

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleClear = () => {
    setSearch("");
  };
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  const options = [
    { value: "any", label: "any" },
    { value: "Over", value1: "100B", label: "Over", label1: "100B" },
    { value: "Over", value1: "10B", label: "Over", label1: "10B" },
    { value: "Over", value1: "1B", label: "Over", label1: "1B" },
    { value: "Over", value1: "100M", label: "Over", label1: "100M" },
    { value: "Over", value1: "10M", label: "Over", label1: "10M" },
    { value: "Over", value1: "1M", label: "Over", label1: "1M" },
    { value: "Not", value1: "Zero", label: "Not", label1: "Zero" },
  ];
  const SelectData = [
    { value: "Export", label: "Export" },
    { value: "Export to Excel", label: "Export to Excel", lock: <LockIcon /> },
    { value: "Export to csv", label: "Export to CSV", lock: <LockIcon /> },
  ];

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleSelectOption = (e) => {
    setSelectedOption(e.target.value);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "70%",
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    p: "15px",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const handleCheckbox = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  // const handleMenuItemClick = (optionValue) => {
  //   if (optionValue === "Export to Excel") {
  //     navigate.push("https://www.youtube.com");
  //   } else if (optionValue === "Export to csv") {
  //     navigate.push("/https://www.youtube.com");
  //   } else {
  //     console.log('error')
  //     // Handle other options as needed
  //   }
  // }
  return (
    <main className={styles.main}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
        }}
      >
        <Box sx={{ width: "80%", margin: "0 auto" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              height: "50px",
            }}
          >
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
          <Box className={styles.mainCont} sx={{ width: "100%" }}>
            <Accordion sx={{ padding: "10px", borderRadius: "5px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  clickable={false}
                >
                  <Typography>Filters</Typography>
                </AccordionSummary>
                <Box>
                  <Tabs
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Active" value="1" />
                    <Tab label="General" value="2" />
                    <Tab label="Income" value="3" />
                    <Tab label="Balance Sheet" value="4" />
                    <Tab label="Cash Flow" value="5" />
                    <Tab label="All" value="6" />
                  </Tabs>
                </Box>
                <TextField
                  value={search}
                  onChange={handleSearch}
                  sx={{ padding: "7px 14px" }}
                  InputProps={{
                    endAdornment:
                      search?.length !== 0 ? (
                        <IconButton onClick={handleClear} size="small">
                          <ClearIcon />
                        </IconButton>
                      ) : (
                        ""
                      ),
                  }}
                />
              </Box>
              <Box
                sx={{
                  p: "10px",
                  width: "100%",
                  // backgroundColor:"#9ca3af",
                  display: "flex",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleOpen}
                  sx={{
                    fontWeight: 900,
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                >
                  Add Filters
                </Button>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 300,
                    border: "1px solid  #e5e7eb",
                    marginLeft: "10px",
                  }}
                >
                  <IconButton
                    type="button"
                    sx={{ p: "5px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Find filter..."
                    inputProps={{ "aria-label": "Find filter..." }}
                  />
                </Paper>
                <LightTooltip title="Clear All Filters" placement="bottom-end">
                  <Button
                    variant="text"
                    startIcon={
                      <HighlightOffIcon
                        sx={{ color: "#4b5563", fontWeight: 100 }}
                      />
                    }
                    sx={{
                      color: "#4b5563",
                      fontWeight: 900,
                      fontSize: "16px",
                      marginLeft: "10px",
                    }}
                  >
                    Clear All Filters
                  </Button>
                </LightTooltip>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        id="modal-modal-title"
                        // variant="h4"
                        // component="h1"
                        sx={{
                          fontWeight: "800",
                          fontSize: "20px",
                        }}
                      >
                        Select screener filters (42 total)
                      </Typography>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={handleClose}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        borderBottom: "1px solid #e5e7eb",
                        paddingBottom: "15px",
                      }}
                    >
                      <Paper
                        component="form"
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: 300,
                          border: "1px solid  #e5e7eb",
                          marginLeft: "10px",
                        }}
                      >
                        <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          placeholder="search"
                          inputProps={{ "aria-label": "search" }}
                        />
                        <IconButton
                          type="button"
                          sx={{ p: "5px" }}
                          aria-label="search"
                        >
                          <SearchIcon />
                        </IconButton>
                      </Paper>
                    </Box>
                    <Box
                      sx={{
                        flexDirection: "column",
                        overflowY: "scroll",
                        height: "85%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          paddingY: "10px",
                        }}
                      >
                        <Typography sx={{ fontWeight: 900 }}>
                          Most Popular
                        </Typography>
                        <CheckboxList
                          fontSize={"5px"}
                          flexDirection={"row"}
                          width={"auto"}
                          items={items1}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          paddingY: "10px",
                        }}
                      >
                        <Typography sx={{ fontWeight: 900 }}>
                          ETF Info
                        </Typography>
                        <CheckboxList
                          fontSize={"5px"}
                          flexDirection={"row"}
                          width={"auto"}
                          items={items2}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          paddingY: "10px",
                        }}
                      >
                        <Typography sx={{ fontWeight: 900 }}>
                          Dividends
                        </Typography>
                        <CheckboxList
                          fontSize={"5px"}
                          flexDirection={"row"}
                          width={"auto"}
                          items={items3}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          paddingY: "10px",
                        }}
                      >
                        <Typography sx={{ fontWeight: 900 }}>
                          Performance
                        </Typography>
                        <CheckboxList
                          fontSize={"5px"}
                          flexDirection={"row"}
                          width={"auto"}
                          items={items4}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          paddingY: "10px",
                        }}
                      >
                        <Typography sx={{ fontWeight: 900 }}>Other</Typography>
                        <CheckboxList
                          items={items5}
                          fontSize={"5px"}
                          flexDirection={"row"}
                          width={"auto"}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Modal>
              </Box>
              <Box
                sx={{
                  // borderBottom: 1,
                  borderColor: "divider",
                  padding: "10px",
                  // bgcolor:"blue",
                }}
              >
                {activeTab === "1" ? (
                  <>
                    <Filter
                      mainOptions={options}
                      handleMainChange={handleSelectOption}
                      value={selectedOption}
                    />
                  </>
                ) : null}
                {activeTab === "2" ? <h1> Second Tab</h1> : null}
                {activeTab === "3" ? <h1> Third Tab</h1> : null}
                {activeTab === "4" ? <h1> Third Tab 4</h1> : null}
                {activeTab === "5" ? <h1> Third Tab 5</h1> : null}
                {activeTab === "6" ? <h1> Third Tab 6</h1> : null}
              </Box>
            </Accordion>
          </Box>
          <Box
            sx={{
              paddingY: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: "1px 0",
              borderStyle: "solid",
              borderColor: " #e5e7eb",
              marginTop: "25px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <List disablePadding sx={{ padding: "0" }}>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemButton sx={{ fontSize: "23px", fontWeight: 900 }}>
                    {/* <ListItemText primary="166 Results" /> */}
                    166 Results
                  </ListItemButton>
                </ListItem>
              </List>
              <List disablePadding sx={{ display: "flex" }}>
                {listData.map((item) => (
                  <ListItem sx={{ padding: "0 2px" }}>
                    <ListItemButton
                      sx={{
                        fontSize: "20px",
                        borderRadius: "6px",
                        padding: "6px 8px",
                      }}
                    >
                      {item.lists}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box
              sx={{
                // backgroundColor:"red",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <List disablePadding sx={{ padding: "0" }}>
                <TextField
                  id="outlined-select-currency"
                  select
                  defaultValue="Export"
                  sx={{ marginLeft: "10px" }}
                >
                  {SelectData.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      sx={{ fontSize: "14px", marginLeft: "10px" }}
                      // onClick={handleSelect}
                      onClick={() => handleMenuItemClick(option.value)}
                    >
                      {option.lock && <LockIcon sx={{ marginRight: "8px" }} />}
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </List> */}

              <List disablePadding sx={{ padding: "0" }}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Search..."
                  size="normal"
                />
              </List>
              <List>
                <TextField
                  id="outlined-select-currency"
                  select
                  defaultValue="Export"
                  onClick={handleSelect}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      fontWeight: 900,
                      marginLeft: "10px",
                      fontSize: "16px",
                    },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        fontWeight: 900,
                        marginLeft: "10px",
                        fontSize: "16px",
                      },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        fontWeight: 900,
                        marginLeft: "10px",
                        fontSize: "16px",
                      },
                    "& .MuiSelect-outlined": {
                      fontWeight: 900,
                      marginLeft: "10px",
                      fontSize: "16px",
                    },
                    "& .MuiSelect-select:focus": {
                      outline: "none",
                    },
                    "& .MuiSelect-select.MuiSelect-selectMenu:focus": {
                      outline: "none",
                    },
                    "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        boxShadow: "none",
                      },
                    zIndex: "100",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {SelectData.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      sx={{ fontSize: "13px" }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </List>
              <List
                sx={{
                  marginLeft: "10px",
                }}
              >
                {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  defaultValue={personName ? personName : 'Column'}
                  onChange={handleCheckbox}
                  // input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  <Box
                  disablePadding
                   sx={{
                    borderBottom:"1px solid #d1d5db"
                  }}>
                    <TextField
                    disablePadding
                      id="standard-search"
                      // label="Search field"
                      type="search"
                      // variant="standard"
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                          paddingTop: "0px", // you may also want to remove the default padding
                          paddingBottom: "0px",
                          width: "85px",
                          fontSize: "17px",
                        },
                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: "none",
                            paddingTop: "0px", // you may also want to remove the default padding
                          paddingBottom: "0px",
                          },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: "none",
                            paddingTop: "0px", // you may also want to remove the default padding
                          paddingBottom: "0px",
                          },
                        "& .MuiSelect-outlined": {
                          paddingTop: "0px", // you may also want to remove the default padding
                          paddingBottom: "0px",
                          border: "none",
                        },
                        "& .MuiSelect-select:focus": {
                          outline: "none",
                          paddingTop: "0px", // you may also want to remove the default padding
                          paddingBottom: "0px",
                        },
                        "& .MuiSelect-select.MuiSelect-selectMenu:focus": {
                          outline: "none",
                        },
                        "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            boxShadow: "none",
                            paddingTop: "0px", // you may also want to remove the default padding
                          paddingBottom: "0px",
                          },
                          "& .MuiInputBase-input":
                          {
                            boxShadow: "none",
                            paddingTop: "0px", // you may also want to remove the default padding
                          paddingBottom: "0px",
                          },
                          "& .MuiOutlinedInput-input":
                          {
                            boxShadow: "none",
                            paddingTop: "0px", // you may also want to remove the default padding
                          paddingBottom: "0px",
                          },
                          "& .MuiInputBase-inputTypeSearch":
                          {
                            boxShadow: "none",
                            paddingTop: "10px", // you may also want to remove the default padding
                          paddingBottom: "10px",
                          paddingLeft:"20px"
                          },
                        zIndex: "100",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "0px", // you may also want to remove the default padding
                          paddingBottom: "0px",
                      }}
                    />
                  </Box>
                  <CheckboxList flexDirection={"column"} items={items6} width={'100%'} fontSize={"1px"} color={"red"} />

                </Select>
              
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
