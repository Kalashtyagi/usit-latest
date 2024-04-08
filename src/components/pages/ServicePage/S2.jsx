import React from "react";

const S2 = () => {
  return (
    <>
      <div
        className="support-company-area support-padding fix"
        style={{ marginTop: "130px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                <div className="section-tittle section-tittle2">
                  {/* <span style={{marginTop:'20px'}}>Service</span> */}
                  <h1>Blockchain</h1>
                  {/* <h2>What can we do?</h2> */}
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    <span style={{ color: "orange", fontSize: "22px" }}>
                      Blockchain
                    </span>{" "}
                    A blockchain is a distributed database or ledger shared
                    among a computer network's nodes. They are best known for
                    their crucial role in cryptocurrency systems for maintaining
                    a secure and decentralized record of transactions, but they
                    are not limited to cryptocurrency uses. Blockchains can be
                    used to make data in any industry immutable—the term used to
                    describe the inability to be altered.
                  </p>
                  <p>
                    Because there is no way to change a block, the only trust
                    needed is at the point where a user or program enters data.
                    This aspect reduces the need for trusted third parties,
                    which are usually auditors or other humans that add costs
                    and make mistakes
                    <br />
                    <br />A blockchain consists of programs called scripts that
                    conduct the tasks you usually would in a database: Entering
                    and accessing information and saving and storing it
                    somewhere. A blockchain is distributed, which means multiple
                    copies are saved on many machines, and they must all match
                    for it to be valid. The blockchain collects transaction
                    information and enters it into a block, like a cell in a
                    spreadsheet containing information. Once it is full, the
                    information is run through an encryption algorithm, which
                    creates a hexadecimal number called the hash. The hash is
                    then entered into the following block header and encrypted
                    with the other information in the block. This creates a
                    series of blocks that are chained together.
                  </p>

                  <br />
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "20%" }} className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                <img
                  width="1200px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfH9iiUaphFFRZ2iQynWhfYHMThFbbFnk7Og&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default S2;
