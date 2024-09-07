import React from 'react';
import { Container, Typography, Grid, Card, CardContent, makeStyles, Theme, createStyles, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(8, 0),
      backgroundColor: '#f5f5f5',
    },
    title: {
      marginBottom: theme.spacing(6),
      fontWeight: 700,
      color: theme.palette.primary.main,
      textAlign: 'center',
    },
    subtitle: {
      marginBottom: theme.spacing(8),
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[4],
      },
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: '0 auto',
      marginBottom: theme.spacing(2),
    },
    name: {
      fontWeight: 600,
      marginBottom: theme.spacing(1),
    },
    role: {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(2),
    },
    experience: {
      marginBottom: theme.spacing(1),
    },
    mission: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(4),
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[2],
    },
    missionTitle: {
      fontWeight: 600,
      marginBottom: theme.spacing(2),
      color: theme.palette.secondary.main,
    },
  })
);

const teamMembers = [
  {
    name: 'Selvaraj Katturaja',
    role: 'UI Architect',
    experience: '20 years',
    expertise: 'PHP, UI dev using React, expert in desinging micro front end framework',
    avatar: '/images/selvaraj.jpg', 
  },
  {
    name: 'Anshul Awashthi',
    role: 'Backend Architect',
    experience: '15 years',
    expertise: 'Java, Python, GoLang and Expert in designing micro services',
    avatar: '/images/selvaraj.jpg', 
  },
  {
    name: 'Sai Thulasiram',
    role: 'Principal Software Engineer',
    experience: '14 years',
    expertise: 'Java, React, and GoLang',
    avatar: '/images/selvaraj.jpg', 
  },
  {
    name: 'Amit Sharma',
    role: 'Principal Software Engineer',
    experience: '14 years',
    expertise: 'Python, React',
    avatar: '/images/selvaraj.jpg', 
  },
];

const AboutUs: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" className={classes.title}>
          About Us
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          We are a team of experienced engineers passionate about sharing our knowledge and preparing the next generation of tech professionals.
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Avatar  className={classes.avatar} 
                    src={member.avatar}
                    alt={member.name}>{member.name[0]}</Avatar>
                  <Typography variant="h6" className={classes.name}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.role}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" className={classes.experience}>
                    <strong>Experience:</strong> {member.experience}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Expertise:</strong> {member.expertise}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className={classes.mission}>
          <Typography variant="h5" className={classes.missionTitle}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            All of us are trained in Generative AI from IISC. We have extensive experience in implementing enterprise web applications that can scale for terabytes of data.
          </Typography>
          <Typography variant="body1" paragraph>
            Currently, we are exploring various use cases of Generative AI and conducting research on building applications by leveraging Gen AI capabilities.
          </Typography>
          <Typography variant="body1">
            Our motive is to share our knowledge and ensure that users are project-ready while attending interviews. We believe in empowering the next generation of engineers with cutting-edge skills and practical experience.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;