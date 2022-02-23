import React, { useState } from "react";
import { Typography, Button, Form, Input, message } from "antd";
import { AddConnection, SearchConnection } from "./components";

const { Title, Text } = Typography;

const App = () => {
    const [connections, setConnections] = useState([
        {
            name: "sameer",
            friends: ["aayushi", "kamalnath"],
        },
        {
            name: "aayushi",
            friends: ["bhaskar"],
        },
        {
            name: "kamalnath",
            friends: ["shanti"],
        },
        {
            name: "shanti",
            friends: ["bhaskar"],
        },
    ]);

    const [isAddViewVisible, setIsAddViewVisible] = useState(false);
    const [isSearchViewVisible, setIsSearchViewVisible] = useState(false);
    const [resultArray, setResultArray] = useState([]);

    const toggleAddViewVisible = () => {
        setIsAddViewVisible((prevState) => !prevState);
    };
    const toggleSearchViewVisible = () => {
        if (isSearchViewVisible) {
            setResultArray([]);
        }
        setIsSearchViewVisible((prevState) => !prevState);
    };

    const addConnection = (values) => {
        let connectionListRef = [...connections];
        let isAlreadyAvailableIndex = connectionListRef.findIndex(
            (item, index) => item.name === values.connectionname1
        );

        if (isAlreadyAvailableIndex !== -1) {
            connectionListRef[isAlreadyAvailableIndex].friends.push(
                values.connectionname2
            );

            setConnections(connectionListRef);
        } else {
            connectionListRef.push({
                name: values.connectionname1,
                friends: [values.connectionname2],
            });
            setConnections(connectionListRef);
        }
        console.log(connections);
        message.success("Connection Added Successfully");
    };

    const connectionsListToGraph = (connections) => {
        const Graph = {};
        for (let { name, friends } of connections) {
            Graph[name] = friends;
        }
        return Graph;
    };

    const getConnections = (source, target, connections) => {
        const Graph = connectionsListToGraph(connections);
        const connectionPaths = [];

        function findConnectionsDFS(
            source,
            target,
            path = [source],
            visited = {}
        ) {
            if (visited[source]) return;

            visited[source] = true;

            for (let friend of Graph[source]) {
                if (friend === target) {
                    connectionPaths.push(path.concat(target));
                } else {
                    findConnectionsDFS(
                        friend,
                        target,
                        path.concat(friend),
                        visited
                    );
                }
            }
        }
        findConnectionsDFS(source, target);
        console.log("CONNECTIONPATH ", connectionPaths);
        setResultArray(connectionPaths);
    };

    const searchConnections = (values) => {
        getConnections(
            values.connectionname1,
            values.connectionname2,
            connections
        );
    };

    return (
        <div className="app__container">
            <Title level={2}>Degree of Separation</Title>
            <AddConnection
                addConnection={addConnection}
                isAddViewVisible={isAddViewVisible}
                toggleAddViewVisible={toggleAddViewVisible}
            />
            <SearchConnection
                isSearchViewVisible={isSearchViewVisible}
                toggleSearchViewVisible={toggleSearchViewVisible}
                searchConnections={searchConnections}
            />
            {resultArray.length ? (
                <div style={{ marginTop: 10 }}>
                    <Title level={4}>RESULT</Title>
                    {resultArray?.map((itemArray, index) => (
                        <p key={index}>{JSON.stringify(itemArray)}</p>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default App;
