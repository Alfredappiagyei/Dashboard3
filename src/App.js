import React from 'react';
import './App.css';
import './test/css/bootstrap.min.css';


import profile from './test/photos/postpic2.png'
import profile2 from './test/photos/loginpic.png'
import profile3 from './test/photos/postpic3.png'
import profile4 from './test/photos/postpic1.png'



import office from './test/photos/of6.jpg'
import office2 from './test/photos/of2.jpg'
import office3 from './test/photos/of4.jpg'
import office4 from './test/photos/of7.jpg'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="col-md-2  thin" >
            <div className="profiles" style={{margin:"0px 0px 100px 0px"}}>
              <span><i class="fa fa-bars"></i></span>
            </div>
            <div className="profiles">
              <span><i class="fa fa-bolt"></i></span>
            </div>
            <div className="profiles">
              <span><i class="fas fa-gem"></i></span>
            </div>
            <div className="profiles">
              <span><i class="fa fa-envelope"></i></span>
            </div>
            <div className="profiles">
              <span><i class="fa fa-flask"></i></span>
            </div>
            <div className="profiles">
              <span><i class="fa fa-telegram"></i></span>
            </div>
            <div className="profiles">
              <span><i class="fa fa-columns"></i></span>
            </div>
            <div className="profiles2" style={{ margin: "520px 0px 50px -10px" }}>
              <img src={profile} width="40px" height="40px" style={{ borderRadius: "50%" }} />
            </div>
          </div>





 



          <div className="col-md-10  fnts">
            <div className="abilan" >
            <span><i class="fas fa-bars"></i></span>
              <h4><b> ABILAN</b> </h4>
            </div>

            <div className="btn">
              <button style={{ padding: "10px 20px", border: "none", borderRadius: "4px", background:"#FF00FF" }}>+  Compose Mail</button>
            </div>

            <p style={{margin:"20px 0px"}}>folders</p>

            <div className="side">
              <span><i class="fa fa-envelope"></i></span>
              <h4>inbox</h4>
            </div>

            <div className="side">
              <span><i class="fa fa-paper-plane"></i></span>
              <h4>Send Mail</h4>
            </div>

            <div className="side">
              <span><i class="fa fa-star"></i></span>
              <h4>Important</h4>
            </div>

            <div className="side">
              <span><i class="fa fa-columns"></i></span>
              <h4>Draft</h4>
            </div>

            <div className="side">
              <span><i class="fa fa-bug"></i></span>
              <h4>Spam</h4>
            </div>

            <div className="side">
              <span><i class="fa fa-trash"></i></span>
              <h4>Trash</h4>
            </div>

            <p style={{margin:"20px 0px"}}>Online Fiend</p>

            <div className="online">
              <img src={profile2} height="50px" width="50px" style={{ borderRadius: "20%" }} />
              <h4>Don Allen</h4>
            </div>


            <div className="online">
              <img src={profile3} height="50px" width="50px" style={{ borderRadius: "20px" }} />
              <h4>Aaron Gonzales</h4>
            </div>


            <div className="online">
              <img src={profile4} height="50px" width="50px" style={{ borderRadius: "20px" }} />
              <h4>Timothy Johnson</h4>
            </div>

            <p style={{margin:"20px 0px"}}>labels</p>


            <div className="labels">
              <button style={{ marginRight: "15px",color:"#9932CC" }}> <span><i class="fa fa-tag"></i></span> Important</button>
              <button style={{color:"#FF1493" }}> <span><i class="fa fa-tag"></i></span> New</button>
            </div>

            <div className="labels">
              <button style={{ marginRight: "15px", color:"blue" }}> <span><i class="fa fa-tag"></i></span> Old</button>
              <button  style={{  color:"green" }}> <span><i class="fa fa-tag"></i></span> priority</button>
            </div>


          </div>

        </div>




        <div className="col-md-9" style={{ background: "#ddd" }}>
          <div className="row" id="inbox">
          <h3 style={{ float: "left",marginLeft:"25px" }}><b> Inbox</b> </h3>
            <span  style={{margin:"10px 0px 0px 0px" }}><img src={profile4} height="30px" width="30px" style={{ borderRadius: "20px" }} /> Larry Nunez</span>
            <span id="f"><i class="fa fa-bell"></i></span>
            <span id="f"><i class="fa fa-envelope"></i></span>
            <span id="f" className="glyphicon glyphicon-trash"> </span>
            

          </div>
          <hr />
          <div className="row" style={{marginBottom:"20px"}}>           
          <div className="in1"  style={{ float: "left" }}>
              <span className="glyphicon glyphicon-unchecked"><div className="glyphicon glyphicon-triangle-bottom"></div> </span>
            </div>

            <div className="in3" style={{ float: "right" }}>
              <span className="glyphicon glyphicon-chevron-left"> </span>
              <span className="glyphicon glyphicon-chevron-right"> </span>
            </div>

            <div className="in2" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{padding:"0px 10px", borderRadius:"5px", background:"silver", marginRight:"10px"}}>
              <span className="glyphicon glyphicon-repeat"> </span>
              <span className="glyphicon glyphicon-eye-open"  style={{background:"#fff", color:"blue"}}> </span>
              <span className="glyphicon glyphicon-trash"> </span>
              </div>
             
              <input type="text" placeholder="type here" style={{ borderRadius: "5px",background:"silver", width:"300px" }}></input> 

            </div>

          </div>


          <div className="container" style={{width:"100%"}}>
            <div className="row">
              <div className="col-md-4">

                <div className="thumbs">
                  <div className="hed">
                  <img src={profile2} height="50px" width="50px" style={{ borderRadius: "20%" }} />
                    <h5>Louiz Adkins</h5>
                  </div>
                  <p>
                    <b> How To Write Better Advertising Copy Heaidng</b>
                  </p>
                  <div className="tail">
                    <span  style={{background:"lightgray" ,color:"#fff"}} className="glyphicon glyphicon-unchecked"> </span>
                    <span style={{ color: "orange" }} className="glyphicon glyphicon-star"> </span>
                    <span className="glyphicon glyphicon-paperclip"> </span>
                  </div>
                </div>


                
                <div className="thumbs">
                  <div className="hed">
                  <span  style={{background:"#0000FF" ,color:"#fff"}}>C </span>
                    <h5>Clarence Hogan</h5>
                  </div>
                  <p>
                    <b> How To Write Better Advertising Copy Heaidng</b>
                  </p>
                  <div className="tail">
                    <span  style={{background:"lightgray" ,color:"#fff"}} className="glyphicon glyphicon-unchecked"> </span>
                    <span style={{ color: "orange" }} className="glyphicon glyphicon-star"> </span>
                    <span className="glyphicon glyphicon-paperclip"> </span>
                  </div>
                </div>


                
                <div className="thumbs">
                  <div className="hed">
                  <span  style={{background:"#DC143C" ,color:"#fff"}}>O </span>
                    <h5>Olga Boone</h5>
                  </div>
                  <p>
                    <b> How To Write Better Advertising Copy Heaidng</b>
                  </p>
                  <div className="tail">
                    <span  style={{background:"lightgray" ,color:"#fff"}} className="glyphicon glyphicon-unchecked"> </span>
                    <span style={{ color: "orange" }} className="glyphicon glyphicon-star"> </span>
                    <span className="glyphicon glyphicon-paperclip"> </span>
                  </div>
                </div>

                <div className="thumbs">
                  <div className="hed">
                  <span  style={{background:"#32CD32" ,color:"#fff"}}>H </span>
                    <h5>Harry burton</h5>
                  </div>
                  <p>
                    <b> How To Write Better Advertising Copy Heaidng</b>
                  </p>
                  <div className="tail">
                    <span  style={{background:"lightgray" ,color:"#fff"}} className="glyphicon glyphicon-unchecked"> </span>
                    <span style={{ color: "orange" }} className="glyphicon glyphicon-star"> </span>
                    <span className="glyphicon glyphicon-paperclip"> </span>
                  </div>
                </div>


                <div className="thumb">
                  <div className="hed">
                  <span style={{background:"#0000CD" ,color:"#fff"}}>N </span>
                    <h5>Nathaniel Mason</h5>
                  </div>
                  <p>
                    <b> How To Write Better Advertising Copy Heaidng</b>
                  </p>
                  <div className="tail">
                    <span  style={{background:"lightgray" ,color:"#fff"}} className="glyphicon glyphicon-unchecked"> </span>
                    <span style={{ color: "orange" }} className="glyphicon glyphicon-star"> </span>
                    <span className="glyphicon glyphicon-paperclip"> </span>
                  </div>
                </div>

              </div>

















              <div className="col-md-8" style={{background:"#fff",padding:"50px 50px",borderRadius:"5px"}}>
               <div className="row">
                 <div className="col-md-6">
                 <h4>
                    <b>
                      Old Fashioned Reciepe For Preventing Allergies And Chemical
                    </b>
                    </h4>
                    <p><b> from:</b> asharaf@glaze.com  </p>
                 </div>

                 <div className="col-md-6 fashion">
                
                 
                 <span style={{color:"red" }} className="glyphicon glyphicon-trash"> </span>
                 <span style={{color:"blue" }} className="glyphicon glyphicon-print"> </span>
                 <span style={{color:"#9932CC" }} className="glyphicon glyphicon-share-alt"> </span>
                 </div>
               </div>

               <div className="row" className="para">
                 <p style={{marginBottom:"20px"}}>Hello Malikan</p>
                <p style={{marginBottom:"40px"}}>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             	  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>It was popularised in the 1960s with the release of </p>
              <p style={{marginBottom:"20px"}}>Letrset sheet containing</p>
              <p>Have a nice day</p>
              <p>Ashiraf</p>
             </div>

             <div className="row">
               <div className="view" style={{marginBottom:"15px"}}>
               <span className="glyphicon glyphicon-paperclip"> Attachment (80MB) </span>
               <button style={{margin:"5px 20px",padding:"5px 20px",background:"#AFEEEE", border:"none", color:"blue"}}>View All</button>
               <button style={{margin:"5px 20px",padding:"5px 20px",background:"lightgreen", border:"none", color:"green"}}>Download All</button>
               </div>

               <div className="imag">
                        <img src={office} width="60px" height="60px" />
                        <img src={office2} width="60px" height="60px"/>
                        <img src={office3} width="60px" height="60px" />
                        <img src={office4} width="60px" height="60px"/>
                </div>
              </div>
              <div className="but">
              <button style={{margin:"5px 20px",padding:"5px 20px",background:"#8B008B", border:"none", color:"#fff"}}>  <span><i class="fa fa-reply"></i></span> Reply</button>
              <button style={{margin:"5px 20px",padding:"5px 20px",background:"#FF1493", border:"none", color:"#fff"}}>  <span><i class="fa fa-share"></i></span> Forward</button>
              </div>

              </div>
            </div>
          </div>
        </div>   {/* md-9 */}
      </div>
    </div>
  );
}

export default App;
