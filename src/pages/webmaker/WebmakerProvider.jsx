import React, { createContext, useContext, useState } from 'react';

const WebmakerContext = createContext();

// eslint-disable-next-line react/prop-types
const WebmakerProvider = ({ children }) => {
    const [isPreview, setIsPreview] = useState(false);
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    return <WebmakerContext.Provider value={{ isPreview, setIsPreview }}>{children}</WebmakerContext.Provider>;
};

const useIsPreviewContext = () => useContext(WebmakerContext);

export { useIsPreviewContext };
export default WebmakerProvider;
