import React from 'react';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend developer </h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <VerifiedTwoToneIcon className="badge-check"/>
                <div>
                    <h3 className="skills__name">Java</h3>
                    
                </div>
            </div>
            <div className="skills__data">
                <VerifiedTwoToneIcon className="badge-check"/>
                <div>
                    <h3 className="skills__name">Node.js</h3>
                    
                </div>
            </div>
            <div className="skills__data">
                <VerifiedTwoToneIcon className="badge-check"/>
                <div>
                    <h3 className="skills__name">C++</h3>
                    
                </div>
            </div>
            
        </div>

        <div className="skills__group">
            <div className="skills__data">
                <VerifiedTwoToneIcon className="badge-check"/>
                <div>
                    <h3 className="skills__name">MySQL</h3>
                    
                </div>
            </div>
           
            <div className="skills__data">
                <VerifiedTwoToneIcon className="badge-check"/>
                <div>
                    <h3 className="skills__name">MQTT</h3>
                    
                </div>
            </div>
            <div className="skills__data">
                <VerifiedTwoToneIcon className="badge-check"/>
                <div>
                    <h3 className="skills__name">PHP</h3>
                    
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Backend