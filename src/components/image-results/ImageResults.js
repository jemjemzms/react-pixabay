import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ""
  };

  static propTypes = {
    images: PropTypes.array.isRequired
  };

  openHandler = img => {
    this.setState({ open: true, currentImg: img });
  };

  closeHandler = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton onClick={() => this.openHandler(img.largeImageURL)}>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.closeHandler} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.closeHandler}
        >
          <img src={this.state.currentImg} alt="" style={{ width: "100%" }} />
        </Dialog>
      </div>
    );
  }
}

export default ImageResults;
