import React from "react";

const Men = ({ mencart, handleAddProduct,  handleAddProductWishlist }) => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {mencart.map((menProdItem) => (
            <div className="col-md-4 mb-3" key={menProdItem.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  style={{
                    marginTop: "20px",
                    height: "170px",
                    width: "75%",
                    marginLeft: "45px",
                  }}
                  src={menProdItem.image}
                  alt="Image loading"
                />
                <div className="card-body">
                  <h3 className="card-title">{menProdItem.name}</h3>
                  <p className="card-text">Price: {menProdItem.price}</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      onClick={() => {
                        handleAddProduct(menProdItem);
                      }}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => {
                        handleAddProductWishlist(menProdItem);
                      }}
                      type="button"
                      className="btn btn-outline-success"
                    >
                      Add to WishList
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Men;
