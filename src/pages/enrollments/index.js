import React from "react";
import Layout from "../Layout/Layout";
import EnrollmentsView from "./enrollmentsView";

function Index() {


    return (
        <Layout>
            <div className="examinations">
                <h3 className="titleDashboard mb-28px text-lg font-semibold">
                    Enrollments
                </h3>
                <div>
                    <EnrollmentsView />
                </div>
            </div>
        </Layout>
    );
}

export default Index;
