import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './style.css';

const tab = [
    {name: "Salads"},
    {name: "Wings"} ,
    {name: "Appetizers"},
    {name: "Cloud BBQ"},
    {name: "Main"},
    {name: "Kids Menu"},
    {name: "Classics"},
    {name: "Sandwiches"},
    {name: "Sides"},
    {name: "Pastas"},
    {name: "Burgers"},
    {name: "Poutines"},
    {name: "Wraps"},
    {name: "Shareables"},
    {name: "Desserts"}
 ]

 const tabPanel = [
    {name: "Salads",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Wings",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Appetizers",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Cloud BBQ",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Main",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Kids Menu",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Classics",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Sandwiches",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Sides",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Pastas",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Burgers",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Poutines",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Wraps",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Shareables",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
    {name: "Desserts",
    tag: "choice of dressing: Balsamic vinegar | Caesar | Greek | Ranch | Blue cheese",
    menu: [{
        menuName: "CAESAR SALAD",
        menuCoice: "Romaine hearts, croutons, bacon bits, parmesan cheese and creamy Caesar dressing",
        price: "$ 12.45"
    },
    {
        menuName: "GREEK SALAD",
        menuCoice: "Chopped lettuce, tomatoes, red onions, bell pepper, olives, cucumber, feta cheese and greek dressing",
        price: "$ 12.45"
    }
    ]
    },
 ]


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100%", my: 4 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ background: '#fafafa', paddingRight: 5, py: 2}}
      >
        {tab.map((val, index)=>{
            return(
            <Tab label={val.name} {...a11yProps(index)} />
            )
        })}
      </Tabs>
      {tabPanel.map((val, index)=>{
        return(
            <TabPanel value={value} index={index}>
            <div>
                <div>
                <Typography variant="h" component="h3" sx={{color:'#DB241E'}}>{val.name}</Typography>
                <Typography variant="p" component="p" sx={{ lineHeight: 2}}>{val.tag}</Typography>
                </div>
                {val.menu.map((v)=>{
                    return(
                        <div style={{display:'flex', gap: 200, justifyContent:'space-between' ,alignItems:'center', marginTop: 20}}>
                        <div>
                    <Typography variant="h" component="h4">{v.menuName}</Typography>
                    <Typography variant="p" component="p">{v.menuCoice}        
                     </Typography>
                        </div>
                        <div>
                            <Button sx={{color:'#fff', px: 2, py: 0.25, background:'#DB241E'}}>Add</Button>
                            <Typography variant="h" component="h4" sx={{marginLeft: 3}}>{v.price} 
                             </Typography>
                        </div>
                    </div>
                    )
                })}
            </div>
          </TabPanel>
        )
      })}
    </Box>
  );
}