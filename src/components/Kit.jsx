import React from "react";
import Header from "./header";
import image from "./image.jpg";
import Bitcoin from "../icons/bicoin.jpg";
const Kit = () => {
    return(
        <div className="kitcomplete">
            <Header />
            <div className="ligne"></div>
            <div className="kit-container">
                <div className="kit-image"><img src={image}  /></div>
                <div className="kit-text"> 
                Vous avez forcément entendu parler du Bitcoin. Et j’en suis certain pour deux raisons : vous lisez cet article ; et même ma grand-mère a entendu parler du Bitcoin.
                <p>Alors oui, ma grand-mère a entendu parlé du Bitcoin. Sauf que voilà, ma grand-mère n’y a rien compris. Pour elle, et pour beaucoup de gens, le Bitcoin, c’est nouveau, c’est compliqué, c’est virtuel et ça lui fait un peu peur. Bref, pour ma grand-mère, le Bitcoin, elle comprend pas et ça a l’air dangereux.
                    et de plonger de avec un kit de sécurité 
                </p>
                <p>Sauf que voilà, le Bitcoin ça a l’air dangereux, d’accord, mais c’est aussi très à la mode. On en entend parler de plus en plus, les médias « traditionnels » y consacrent articles, débats et reportages ! nous vous donnons donc la possibilité d'etre mieux que ma grand-mère</p>
                <ul>
                    <li>si c'est votre toute première fois d'interagir  avec le terme BItCoin et block chain, un tutoriel plus complet vous est fournit <em>cliquer la</em> </li>
                    <li>si vous avez deja eu a manipuler un wallet et vous voulez vous ameliorer encore plus <em><span className="bouton1">cliquer la</span></em>  </li>
                    <li>si vous nous suivez pour autres choses, vous ne vous etes pas tromper, lisez et respecter les instruction fournit si contre ! nous utilisons donc muun_wallet
                        et nous esperons avancer avec vous dans cette aventure  </li>
                </ul>
                
                </div>
                 <div> <img src={Bitcoin} className="kit-logo"/>
                 <p className="import">
                 C'est quoi le principe de la cryptomonnaie ?
Les « cryptomonnaies », plutôt appelés « crypto-actifs », sont des actifs numériques virtuels qui reposent sur la technologie de la blockchain (chaine de bloc) à travers un registre décentralisé et un protocole informatique crypté. Un crypto-actif n'est pas une monnaie.
                 </p>
                 </div>
                </div>
            
            Bienvenue
        </div>
    )
}
export default Kit;