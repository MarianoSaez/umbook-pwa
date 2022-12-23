import React from 'react';
import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';  
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, logInSharp, logOutSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, personCircleSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  
  const Menu: React.FC<any> = (props) => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Ing. de Software Aplicada</IonListHeader>
            <IonNote>Average Login App</IonNote>
            <IonItem routerLink='/login'>
              <IonIcon slot="start" icon={logInSharp}/>
              <IonLabel>Log In</IonLabel>
            </IonItem>
            <IonItem routerLink='/dashboard'>
              <IonIcon slot="start" icon={personCircleSharp}/>
              <IonLabel>Dashboard</IonLabel>
            </IonItem>
            <IonItem routerLink='/' onClick={() => {localStorage.removeItem("token"); props.setUsers([])}}>
              <IonIcon slot="start" icon={logOutSharp}/>
              <IonLabel>Log Out</IonLabel>
            </IonItem>
          </IonList>
  
          {/* <IonList id="labels-list">
            <IonListHeader>Labels</IonListHeader>
            {labels.map((label, index) => (
              <IonItem lines="none" key={index}>
                <IonIcon slot="start" icon={bookmarkOutline} />
                <IonLabel>{label}</IonLabel>
              </IonItem>
            ))}
          </IonList> */}
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;