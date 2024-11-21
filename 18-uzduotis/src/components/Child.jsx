
export default function Child({ itemsPropsas }) {
    return (
        
           
            <ul>
                {itemsPropsas.map((masyvoDaiktas, index) => (
                    <li key={index}>{masyvoDaiktas}</li>
                ))}
            </ul>
        
    );
    
    
}


