import React, { Component } from 'react';
import tableau from 'tableau-api';
 
class Dashboard extends Component {
    componentDidMount() {
        this.initViz()
    }
     
    initViz() {
        const vizUrl = 'https://public.tableau.com/views/COVID-19DKIJakartaDashboard1_6/COVID-19EffectsonCelerates?:language=en&:display_count=y&:origin=viz_share_link';
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)
    }

    render () {
        return (
            <div className='tableau-container'>
                <div className='tableau-title text-center' id="dashboardx">
                    <h4>Dashboard</h4>
                </div>
                <div className='tableau-items text-center' style={{marginTop:"40px"}}>
                    <div className='container tableau1' ref={(div) => {this.vizContainer = div}} style={{width:"80%"}}>
                    </div>
                </div>
            </div>
        )
    }
}
  
export default Dashboard;