import React from 'react'
import { useHistory } from "react-router";

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import { Typography, makeStyles } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import PropTypes from 'prop-types'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { apiURL } from '../../services/api'

SwiperCore.use([Navigation])

export const useStyles = makeStyles(() => ({
  course: {
    width: '250px',
    background: '#fff',
    boxShadow: '-1px -1px 4px rgba(0, 0, 0, 0.25), 2px 2px 4px rgba(0, 0, 0, 0.25)',
    height: 'auto',
    transform: 'scale(0.9)',
    transition: 'all ease-in-out 0.3s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1)',
    },
  },
  courseImage: {
    width: '100%',
    height: '140px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
}))

export default function CoursesCard({ items, slidesPerView, spaceBetween }) {
  const classes = useStyles()
  const history = useHistory()
  const courseAvgReadOnly = (totalScore, numberOfRatings) => Number((totalScore / numberOfRatings).toFixed(0))
  const goToPage = id => {
    history.push(`/cursos/${id}`)
  }
  return (
    <Swiper breakpoints={{
      320: {
        width: 320,
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 3,
      },
    }} spaceBetween={spaceBetween} slidesPerView={slidesPerView} navigation>
      {items.length > 0 ? (
        items.map(item => (
          <SwiperSlide key={item.id} className={classes.course} onClick={() => goToPage(item.id)}>
            <img className={classes.courseImage} src={`${apiURL}/${item.courseImage?.link}`} alt={item.title} />
            <Typography variant="h6" color="secondary">
              {item.title}
            </Typography>
            <Typography style={{ color: '#847F7F' }}>{item.teacher?.user?.firstName} {item.teacher?.user?.lastName}</Typography>
            <div className={classes.rating}>
              <Typography style={{ color: '#847F7F', fontWeight: 100, marginRight: '0.5rem' }}>
                {isNaN(item.totalScore / item.numberOfRatings) ? 0 : `${(item.totalScore / item.numberOfRatings).toFixed(2)}`}
              </Typography>
              <Rating value={courseAvgReadOnly(item.totalScore, item.numberOfRatings)} precision={0.5} readOnly />
            </div>
          </SwiperSlide>
        ))
      ) : (
          <div className={classes.noAnnouncements}>
            <Typography style={{ color: '#847F7F', fontWeight: 100 }} variant='h6'>
              Não conseguimos encontrar nada...
            </Typography>
          </div>)
      }
    </Swiper>
  )
}

CoursesCard.defaultProps = {
  items: [],
  slidesPerView: 5,
  spaceBetween: 20,
}

CoursesCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      teacher: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
      }),
      totalScore: PropTypes.number,
    })
  ),
  slidesPerView: PropTypes.number,
  spaceBetween: PropTypes.number,
}
