import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import projImageOne from '../assets/images/project-img1.png';
import projImageTwo from '../assets/images/project-img2.png';
import projImageThree from '../assets/images/project-img3.png';
import AppCarousel from './AppCarousel';

export default function Home() {
    return (
        <div className='App App-Nav'>
            <AppCarousel />

            {/* Card One */}
            <Card sx={{ maxWidth: 340, padding: 1, margin: 1 }} style={{ display: 'inline-block' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={projImageOne}
                        alt="Travelling World"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Travelling Website
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Travelling Website by which you can collect data and information about any venue.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* Card Two */}
            <Card sx={{ maxWidth: 340, padding: 1, margin: 1 }} style={{ display: 'inline-block' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={projImageTwo}
                        alt="Travelling World"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Travelling Website
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Travelling Website by which you can collect data and information about any venue.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* Card Three */}
            <Card sx={{ maxWidth: 340, padding: 1, margin: 1 }} style={{ display: 'inline-block' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={projImageThree}
                        alt="Travelling World"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Travelling Website
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Travelling Website by which you can collect data and information about any venue.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* Card Four */}
            <Card sx={{ maxWidth: 340, padding: 1, margin: 1 }} style={{ display: 'inline-block' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={projImageThree}
                        alt="Travelling World"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Travelling Website
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Travelling Website by which you can collect data and information about any venue.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
