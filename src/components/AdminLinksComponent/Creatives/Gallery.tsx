import React, { Component } from "react";
import GalleryModal from "./GalleryModal";

class Gallery extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }

  renderImageContent(src: string | number | null | undefined, index: any) {
    return (
      <div
        className="position-relative mainContentGallery"
        style={{ cursor: "pointer" }}
        onClick={(e) => this.openModal(e, index)}
      >
        {/* // @ts-ignore */}
        {/* <img src={src} key={src}/> */}
        <img key={src} />
        <div className="backGallery" />
        <div className="galleryTexts d-flex flex-column justify-content-center align-items-center h-100 w-100">
          <div className="">
            <img
              src="/assets/svg/gallery-search.svg"
              className="gallerySearchImg img-fluid my-2"
              alt=""
            />
          </div>
          <div className="">
            <p className="mb-0 text">Ремонт</p>
            <p className="mb-0 text">Бытовой Техники</p>
          </div>
        </div>
      </div>
    );
  }

  openModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: any) {
    this.setState({ currentIndex: index });
  }

  closeModal(e: { preventDefault: () => void } | undefined) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }

  findPrev(e: { preventDefault: () => void } | undefined) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      // @ts-ignore
      currentIndex: prevState.currentIndex - 1,
    }));
  }

  findNext(e: { preventDefault: () => void } | undefined) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      // @ts-ignore
      currentIndex: prevState.currentIndex + 1,
    }));
  }

  render() {
    const imgUrls = [
      "https://source.unsplash.com/PC_lbSSxCZE/800x600",
      "https://source.unsplash.com/lVmR1YaBGG4/800x600",
      "https://source.unsplash.com/5KvPQc1Uklk/800x600",
      "https://source.unsplash.com/GtYFwFrFbMA/800x600",
      "https://source.unsplash.com/Igct8iZucFI/800x600",
      "https://source.unsplash.com/M01DfkOqz7I/800x600",
      "https://source.unsplash.com/MoI_cHNcSK8/800x600",
      "https://source.unsplash.com/M0WbGFRTXqU/800x600",
      "https://source.unsplash.com/s48nn4NtlZ4/800x600",
      "https://source.unsplash.com/E4944K_4SvI/800x600",
      "https://source.unsplash.com/F5Dxy9i8bxc/800x600",
      "https://source.unsplash.com/iPum7Ket2jo/800x600",
    ];

    return (
      <div className="gallery-container">
        <div className="gallery-grid position-relative">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          // @ts-ignore
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          // @ts-ignore
          hasPrev={this.state.currentIndex > 0}
          // @ts-ignore
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          // @ts-ignore
          src={imgUrls[this.state.currentIndex]}
        />
      </div>
    );
  }
}

export default Gallery;
