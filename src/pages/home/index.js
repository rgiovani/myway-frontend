import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { Button, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'

import CoursesCard from "../../components/coursesCard";
import { coursesGetRequest, englishCoursesGetRequest } from "../../store/modules/courses/actions";
import { languagesGetRequest } from "../../store/modules/language/actions";
import { useStyles, StyledFilter, StyledSelect } from "./styles";



export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const list = useSelector(state => state.course.data)
  const englishCourses = useSelector(state => state.course.englishCourses)
  const languages = useSelector(state => state.language.data)

  useEffect(() => {
    dispatch(coursesGetRequest());
    dispatch(englishCoursesGetRequest());
    dispatch(languagesGetRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [value, setValue] = useState('')
  const [language, setLanguage] = useState('')
  const [order, setOrder] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSearch = () => {
    dispatch(coursesGetRequest(value, language, order))
  }

  const handleLanguageChange = e => {
    setLanguage(e.target.value)
  }

  const handleOrderChange = e => {
    setOrder(e.target.value)
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <StyledFilter>
          <TextField
            name="curso"
            id="curso"
            label="Pesquisar por cursos"
            onChange={handleChange}
            value={value}
            fullWidth
          />
          <StyledSelect>
            <div>
              <InputLabel id="language">Filtrar por idioma</InputLabel>
              <Select labelId="language" id="language" value={language} onChange={handleLanguageChange} fullWidth>
                <MenuItem value=''>Selecione um idioma</MenuItem>
                {languages.map(language => (
                  <MenuItem key={language.name} value={language.name}>{language.name}</MenuItem>
                ))}
              </Select>
            </div>
            <div>
              <InputLabel id="order">Ordenar por</InputLabel>
              <Select
                fullWidth
                labelId="order"
                id="order"
                value={order}
                onChange={handleOrderChange}
              >
                <MenuItem value='ASC'>Crescente</MenuItem>
                <MenuItem value='DESC'>Decrescente</MenuItem>
              </Select>
            </div>
          </StyledSelect>
          <Button onClick={handleSearch} style={{ marginTop: '1rem' }} variant="contained" color="primary" disableElevation>Pesquisar</Button>
        </StyledFilter>
        <div className={classes.courses} style={{ marginBottom: "6rem" }}>
          <Typography variant="h5" color="secondary">
            Todos os cursos
          </Typography>
          <CoursesCard items={list} />
        </div>
        <div className={classes.courses}>
          <Typography variant="h5" color="secondary">
            Principais cursos de Inglês
          </Typography>
          <CoursesCard items={englishCourses} />
        </div>
      </div>
    </div>
  );
}