import React from 'react';
import { Container, Typography, makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import { School, Work, EmojiObjects, Laptop } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      learningPathSection: {
        padding: theme.spacing(12, 0), // Increased padding
        backgroundColor: '#f5f5f5',
      },
      header: {
        marginBottom: theme.spacing(8), // Increased margin below header
      },
      title: {
        fontWeight: 700,
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2),
      },
      subtitle: {
        fontWeight: 500,
        color: theme.palette.text.secondary,
        maxWidth: '800px',
        margin: '0 auto',
      },
      timeline: {
        padding: theme.spacing(0, 2), // Added horizontal padding
      },
      timelineContent: {
        padding: theme.spacing(2, 3),
        backgroundColor: '#fff',
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        marginBottom: theme.spacing(3),
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: theme.shadows[3],
          transform: 'translateY(-3px)',
        },
      },
      timelineTitle: {
        fontWeight: 600,
        marginBottom: theme.spacing(1),
        color: theme.palette.primary.main,
      },
      quoteSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: theme.spacing(0, 2), // Added horizontal padding
      },
      quote: {
        fontStyle: 'italic',
        fontSize: '1.2rem',
        marginBottom: theme.spacing(3),
        padding: theme.spacing(3),
        backgroundColor: '#fff',
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: theme.shadows[3],
          transform: 'translateY(-3px)',
        },
      },
      author: {
        textAlign: 'right',
        fontWeight: 600,
        color: theme.palette.text.secondary,
      },
    })
);

const timelineItems = [
  { icon: <School />, title: 'Enroll in a Package', content: 'Choose a learning package that fits your career goals and start your journey.' },
  { icon: <Laptop />, title: 'Complete Courses', content: 'Work through the course materials, complete assignments, and build projects.' },
  { icon: <EmojiObjects />, title: 'Receive Mentorship', content: 'Get guidance from industry experts to accelerate your learning and career growth.' },
  { icon: <Work />, title: 'Apply for Internships', content: 'Put your skills to the test with real-world internship opportunities.' },
];

const quotes = [
  { text: "An engineer with AI skills will replace an engineer without AI skills.", author: "Kai-Fu Lee" },
  { text: "The future belongs to those who learn more skills and combine them in creative ways.", author: "Robert Greene" },
  { text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert" },
];

const Quote: React.FC<{ text: string; author: string }> = ({ text, author }) => {
    const classes = useStyles();
    return (
      <div className={classes.quote}>
        <Typography variant="body1" gutterBottom>"{text}"</Typography>
        <Typography variant="subtitle2" className={classes.author}>- {author}</Typography>
      </div>
    );
  };
  
  const LearningPath: React.FC = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.learningPathSection}>
        <Container maxWidth="lg">
          <div className={classes.header}>
            <Typography variant="h3" align="center" className={classes.title}>
              Your Learning Journey
            </Typography>
            <Typography variant="h6" align="center" className={classes.subtitle}>
              Embark on a transformative educational experience tailored to your career goals
            </Typography>
          </div>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Timeline align="left" className={classes.timeline}>
                {timelineItems.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color="primary">{item.icon}</TimelineDot>
                      {index < timelineItems.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent className={classes.timelineContent}>
                      <Typography variant="h6" className={classes.timelineTitle}>{item.title}</Typography>
                      <Typography>{item.content}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.quoteSection}>
                {quotes.map((quote, index) => (
                  <Quote key={index} text={quote.text} author={quote.author} />
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  };
  

export default LearningPath;