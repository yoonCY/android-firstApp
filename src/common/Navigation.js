import { NavigationActions } from 'react-navigation';

let _navigator; // 네비게이션 변수 설정 

const setTopLevelNavigator = navigatorRef => _navigator = navigatorRef;

const navigate = ( routeName, params ) => {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
}

const back = () => { 
    _navigator.dispatch(
        NavigationActions.back()
    );
}

export default {
    setTopLevelNavigator,
    navigate,
    back
};