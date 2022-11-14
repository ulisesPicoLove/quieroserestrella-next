import React from 'react';

const FooterPrivacy = () => {
    return (
        <>
        <style jsx>
            {
                `
                .footer-privacy{
                    text-align: right;
                    padding: 1em 0;                    
                }
                .footer-privacy a{
                    color: #007eaa;
                    font-weight: 600;
                }
                .footer-privacy a:visited{
                    color: #007eaa;                    
                }
                `
            }
        </style>
        <div className='footer-privacy'>
            <a href="/privacidad">Aviso de privacidad</a>
        </div>
        </>
    );
}

export default FooterPrivacy;
