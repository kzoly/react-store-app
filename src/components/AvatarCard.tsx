import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useState } from 'react'

interface CardItem {
    id: string;
    avatar?: string;
    title?: string;
    description?: string;

}

interface AvatarCardProps {
    item: CardItem;
    onDelete: (id: string) => Promise<void>;
    //onEdit: (id: string) => void; 
    
}


export default function AvatarCard(props: AvatarCardProps) {

    const { item, onDelete
        // ,onEdit
     } = props;
   // const [showEditItem, setShowEditItem] = useState(false);
    
    
    return (
        <Card className='grid-item' raised style={{width:200}}>
            <CardActionArea>
                {item.avatar && (
                    <CardMedia
                        //className={classes.media}
                        component='img'
                        image={item.avatar}
                        title="Contemplative Reptile"
                    />
                )}
                <CardContent>
                    {item.title && (


                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                    )}
                    {item.description && (

                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.description}
                        </Typography>
                    )}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={() => onDelete(item.id)}>
                    Delete
                </Button>
                {/* <Button variant="contained" color="secondary" onClick={() => onEdit(item.id)}>
                    Add
                </Button>
                 */}
            </CardActions>
        </Card>

    
    );
}
