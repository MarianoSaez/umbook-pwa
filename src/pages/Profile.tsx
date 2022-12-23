import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, RouteComponentProps, useLocation } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

type User = {
  login: string
}

const Dashboard: React.FC<any> = (props) => {
  const history = useHistory();
  const loc = useLocation();
  const [users, setUsers] = useState<Array<any>>([]);
  // let users: User[] = props.users;

  useEffect(() => {
    if (localStorage.getItem("token")) {

      const api = axios.create({
          baseURL: `http://localhost:8080/api`,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
          }
      })
      api.get("/users")
          .then(res => {             
              setUsers(res.data)
          })
          .catch(error=>{
              history.push("/login");
              console.log("Error fetching data")
          })
    }
  }, [loc])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
  <IonTitle>Dasboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
              <IonCol>
                  <h4>Welcome: Usuario promedio!</h4>
                  <IonItemDivider></IonItemDivider>
              </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {users.map((user, i) => {
                return (
                  <IonItem key={i}>
                    {/* <IonAvatar>
                        <img src={user.avatar} />
                    </IonAvatar> */}
                    <IonLabel>
                        <h2 style={{ paddingLeft: "10px" }}>{user.login} </h2>
                        {/* <p style={{ paddingLeft: "10px" }}>{user.email}</p> */}
                    </IonLabel>
                  </IonItem>
                );
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
