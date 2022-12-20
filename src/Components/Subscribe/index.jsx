import "./style.css"
export default function Subscribe (props){
        return (
                    <div style={{display:"flex"}}>
                    <div className="div_main" style={{width:'33.33%'}}>
                        <div style={{display:"flex",alignItems:"center"}}><img src={props.email_img} alt=""/> <span style={{color:"white"}}>{props.descr}</span> </div>
                    </div>

                    <div className="div_main" style={{width:'50%',}}>
                        <input style={{flexGrow:'1',backgroundColor:"transparent",outline:'1px solid #FFCE6D',color:'white', padding:'15px'}} type={props.txt} placeholder={props.plh} />
                    </div>

                    <div className="div_main" style={{width:'16.33%'}}>
                        <button className="button-2-content">{props.subs}</button>
                    </div>
                    </div>
            );

                }
            
