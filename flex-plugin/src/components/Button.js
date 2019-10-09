import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: 3,
        'padding-left': 5,
        'padding-right': 5,
        'margin-bottom': 12,
        'line-height': 1.25,
        'text-transform': 'none'
    },
    input: {
        display: 'none',
    },
});

class MyButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <Button
                variant="contained"
                className={classes.button}
                onClick={this.props.sendMedia}
            >
                {this.props.label}
            </Button>
        );
    }
}

export default withStyles(styles)(MyButton);
