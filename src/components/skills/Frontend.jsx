import React from 'react';
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend developer  </h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <VerifiedTwoToneIcon className="badge-check"/>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        
                    </div>
                </div>
                <div className="skills__data">
                    <VerifiedTwoToneIcon className="badge-check"/>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        
                    </div>
                </div>
                
                <div className="skills__data">
                    <VerifiedTwoToneIcon className="badge-check"/>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        
                    </div>
                </div>
                
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <VerifiedTwoToneIcon className="badge-check"/>
                    <div>
                        <h3 className="skills__name">Typescript</h3>
                        
                    </div>
                </div>
                <div className="skills__data">
                    <VerifiedTwoToneIcon className="badge-check"/>
                    <div>
                        <h3 className="skills__name">Git</h3>
                       
                    </div>
                </div>
                <div className="skills__data">
                    <VerifiedTwoToneIcon className="badge-check"/>
                    <div>
                        <h3 className="skills__name">React</h3>
                        
                    </div>
                </div>
                
                
            </div>
        </div>

    </div>
  )
}

export default Frontend