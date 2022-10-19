import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './joindao.module.scss'

interface IProps {
     showModal: any;
     setShowModal: any;
}

const JoinDao = ({ showModal, setShowModal } : IProps) => {

       const modalRef = useRef<any | any>();
      
      const animation = useSpring({
        config: {
          duration: 300
        }, 
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
      })

      const closeModal = (e :any) => {
         if(modalRef.current === e.target) {
          setShowModal(false)
         }
      }

      const keyPress = useCallback((e :any) => {
        if(e.key === 'Escape' && showModal) {
          setShowModal(false)
        }
      }, [setShowModal, showModal])

      useEffect(() => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
      }, [keyPress])

     return (
          <>
          {showModal ? ( 
          <div className={styles.join} ref={modalRef} onClick={closeModal}>
               {/* animating the whole container properties*/}
                <animated.div style={animation}>
               <div className={styles.wrapper} showModal={showModal}>
                     <div className={styles.closeButton} onClick={() => setShowModal((prev : any) => !prev)}></div>
                    <div className={styles.container}>
                         <div className={styles.join_content}>
                         <h1 className={styles.title}>Join Succour DAO</h1>
                         <p className={styles.desc}>
                              To join the Succour DAO, you need at least 30,000 cUSD balance. It is important to note that these amounts are subject to change as proposals for that will come up sometime in the future.
                         </p>
                              
                        
                           <p className={styles.join_question}>Are you willing to join a non-profit organisation? <span>*</span></p>
                         
                              <div className={styles.checkbox_container}>
                                  <input type="checkbox" id="check" name="checkbox" /> 
                                   <span className={styles.checkmark}></span>
                                  <label htmlFor="check">Yes</label>
                              </div>

                              
                              <div className={styles.checkbox_container}>
                                  <input type="checkbox" id="check" name="checkbox" /> 
                                  <span className={styles.checkmark}></span>
                                  <label htmlFor="check">No</label>
                              </div>

                              <button className={styles.join_btn}>Connect Wallet</button>
                     </div>

                    </div>                  
               </div>
               </animated.div>
          </div>
            ): null}
          </>
     )
}

export default JoinDao