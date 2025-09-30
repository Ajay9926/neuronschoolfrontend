"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Styled TableCell
const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000000", 
    color: "#ffffff",           
    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "15px"
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#0b0d16ff", 
    color: "#f0f0f0",          
    fontSize: "15px",
  },
}));

// Table data creator
function createData(
  name: string,
  neuronsSchool: string,
  otherAICourses: string,
  onlinePlatforms: string,
  traditionalInstitutes: string,
) {
  return { name, neuronsSchool, otherAICourses, onlinePlatforms, traditionalInstitutes };
}

// Table rows
const rows = [
  createData('Real-World Projects', "✅", "❌", "❌", "❌"),
  createData('1:1 Expert Mentorship', "✅", "❌", "❌", "✅"),
  createData('Comprehensive Structured Curriculum', "✅", "✅", "✅", "✅"),
  createData('Placement Support', "✅", "✅", "❌", "✅"),
  createData('Community & Networking Opportunities', "✅", "✅", "❌", "❌"),
  createData('Personal Portfolio Building', "✅", "❌", "✅", "❌"),
  createData('24x7 Doubt Solving Portal', "✅", "✅", "❌", "❌"),
  createData('Soft Skill Training', "✅", "❌", "❌", "✅"),
  createData('Personalized Learning Platform', "✅", "❌", "❌", "❌"),
];

const WhyDifferent: React.FC = () => {
  return (
    <section className="new-section scroll-section">
      {/* Section Heading */}
      <Box>
        <Typography variant="h5">WHY WE DIFFERENT</Typography>
        <Typography variant="h1">
          Why Data Science <span className="stroke">Course</span> from Neurons School
        </Typography>
      </Box>

      {/* Table Container with horizontal scroll for mobile */}
      <Box className="mt-50" sx={{ overflowX: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1015 }} aria-label="customized table">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                <StyledTableCell>Perks</StyledTableCell>
                <StyledTableCell align="center">Neurons School</StyledTableCell>
                <StyledTableCell align="center">Other AI Courses</StyledTableCell>
                <StyledTableCell align="center">Online Platforms</StyledTableCell>
                <StyledTableCell align="center">Traditional Institutes</StyledTableCell>
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.neuronsSchool}</StyledTableCell>
                  <StyledTableCell align="center">{row.otherAICourses}</StyledTableCell>
                  <StyledTableCell align="center">{row.onlinePlatforms}</StyledTableCell>
                  <StyledTableCell align="center">{row.traditionalInstitutes}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </section>
  );
};

export default WhyDifferent;
