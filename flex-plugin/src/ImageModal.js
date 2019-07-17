import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

export default class ImageModal extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.showForm = this.showForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    this.state = {
      open: false,
      media: "",
      disposition: "option-1"
    };
  }

  componentDidMount() {
    console.log("modal did mount");
    document.addEventListener(
      "smsModalControlOpen",
      e => {
        this.showForm(e.url);
      },
      false
    );
  }

  showForm(media) {
    console.log("show form function");
    this.setState({ open: true, media: media });
  }

  cancelForm() {
    this.setState({ open: false });
  }

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.cancelForm}
        aria-labelledby="form-dialog-title"
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogContent>
          <img width="100%" src={this.state.media} alt="MMS Media" />
        </DialogContent>
      </Dialog>
    );
  }
}
