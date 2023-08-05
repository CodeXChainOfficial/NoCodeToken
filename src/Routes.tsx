import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Forumcodexpullrequestmessage = React.lazy(
  () => import("pages/Forumcodexpullrequestmessage"),
);
const Forumcodexpullrequestalldetail = React.lazy(
  () => import("pages/Forumcodexpullrequestalldetail"),
);
const Forumcodexpullrequest = React.lazy(
  () => import("pages/Forumcodexpullrequest"),
);
const Forumcodexdevelopmentalldetail = React.lazy(
  () => import("pages/Forumcodexdevelopmentalldetail"),
);
const Forumcodexdevelopment = React.lazy(
  () => import("pages/Forumcodexdevelopment"),
);
const ForumcodexprojectsalldetailOne = React.lazy(
  () => import("pages/ForumcodexprojectsalldetailOne"),
);
const ForumcodexprojectsOne = React.lazy(
  () => import("pages/ForumcodexprojectsOne"),
);
const Forumcodexprojectsalldetail = React.lazy(
  () => import("pages/Forumcodexprojectsalldetail"),
);
const Forumcodexprojects = React.lazy(() => import("pages/Forumcodexprojects"));
const ForumcodexeducationalldetailOne = React.lazy(
  () => import("pages/ForumcodexeducationalldetailOne"),
);
const Forumcodexsuggestion = React.lazy(
  () => import("pages/Forumcodexsuggestion"),
);
const CodeXDevelopment = React.lazy(() => import("pages/CodeXDevelopment"));
const ForumcodexDiscussiondefault = React.lazy(
  () => import("pages/ForumcodexDiscussiondefault"),
);
const Forumcodexdiscusiondetail = React.lazy(
  () => import("pages/Forumcodexdiscusiondetail"),
);
const Forumcodexeducationalldetail = React.lazy(
  () => import("pages/Forumcodexeducationalldetail"),
);
const Forumcodexeducation = React.lazy(
  () => import("pages/Forumcodexeducation"),
);
const Forumcodexaccountsetaccount = React.lazy(
  () => import("pages/Forumcodexaccountsetaccount"),
);
const Forumcodexaccountsetnotificationscedhule = React.lazy(
  () => import("pages/Forumcodexaccountsetnotificationscedhule"),
);
const Forumcodexdiscusiondiscobot = React.lazy(
  () => import("pages/Forumcodexdiscusiondiscobot"),
);
const Homepagecontributor = React.lazy(
  () => import("pages/Homepagecontributor"),
);
const Forumcodex = React.lazy(() => import("pages/Forumcodex"));
const Forumcodexaddnewtopic = React.lazy(
  () => import("pages/Forumcodexaddnewtopic"),
);
const Forumcodexalldetail = React.lazy(
  () => import("pages/Forumcodexalldetail"),
);
const ForumcodexdiscusiondetailOne = React.lazy(
  () => import("pages/ForumcodexdiscusiondetailOne"),
);
const Communityaccountsettingconnections = React.lazy(
  () => import("pages/Communityaccountsettingconnections"),
);
const Communityaccountsettingnotif = React.lazy(
  () => import("pages/Communityaccountsettingnotif"),
);
const Communityaccountsettingaccount = React.lazy(
  () => import("pages/Communityaccountsettingaccount"),
);
const Forumverificationpage = React.lazy(
  () => import("pages/Forumverificationpage"),
);
const Communitysuccesauthentification = React.lazy(
  () => import("pages/Communitysuccesauthentification"),
);
const CommunitysigninExternalappidentityviadiscord = React.lazy(
  () => import("pages/CommunitysigninExternalappidentityviadiscord"),
);
const Communitysignin = React.lazy(() => import("pages/Communitysignin"));
const Myaccountdeveloperdeleteaccountsucces = React.lazy(
  () => import("pages/Myaccountdeveloperdeleteaccountsucces"),
);
const Myaccountdeveloperdeleteaccountconfimation = React.lazy(
  () => import("pages/Myaccountdeveloperdeleteaccountconfimation"),
);
const Myaccountgeneraluserdeleteaccountconfirmation = React.lazy(
  () => import("pages/Myaccountgeneraluserdeleteaccountconfirmation"),
);
const Myaccountgeneraluserdeleteaccountsucces = React.lazy(
  () => import("pages/Myaccountgeneraluserdeleteaccountsucces"),
);
const Myaccountrewardtransactionall = React.lazy(
  () => import("pages/Myaccountrewardtransactionall"),
);
const Myaccountrewardtransactiondefault = React.lazy(
  () => import("pages/Myaccountrewardtransactiondefault"),
);
const Myaccountgeneraluserrewardtransactionall = React.lazy(
  () => import("pages/Myaccountgeneraluserrewardtransactionall"),
);
const Myaccountgeneraluserrewardtransaction = React.lazy(
  () => import("pages/Myaccountgeneraluserrewardtransaction"),
);
const Myaccountcontributeviewmore = React.lazy(
  () => import("pages/Myaccountcontributeviewmore"),
);
const MyaccountcontributedprojectsviewmoreOne = React.lazy(
  () => import("pages/MyaccountcontributedprojectsviewmoreOne"),
);
const Myaccountcontributedprojectsall = React.lazy(
  () => import("pages/Myaccountcontributedprojectsall"),
);
const Myaccountcontributedprojectsviewmore = React.lazy(
  () => import("pages/Myaccountcontributedprojectsviewmore"),
);
const Myaccountcheckpointsviewmore = React.lazy(
  () => import("pages/Myaccountcheckpointsviewmore"),
);
const Myaccountcheckpointviewmore = React.lazy(
  () => import("pages/Myaccountcheckpointviewmore"),
);
const Myaccountdevcheckpointsviewmore = React.lazy(
  () => import("pages/Myaccountdevcheckpointsviewmore"),
);
const Myaccountdevcheckpoints = React.lazy(
  () => import("pages/Myaccountdevcheckpoints"),
);
const Myaccounttotalreward = React.lazy(
  () => import("pages/Myaccounttotalreward"),
);
const Myaccounttotalprojects = React.lazy(
  () => import("pages/Myaccounttotalprojects"),
);
const MyaccountnotiftotalpointsOne = React.lazy(
  () => import("pages/MyaccountnotiftotalpointsOne"),
);
const Myaccountdeveloper = React.lazy(() => import("pages/Myaccountdeveloper"));
const MyaccounttotalrewardOne = React.lazy(
  () => import("pages/MyaccounttotalrewardOne"),
);
const MyaccounttotalprojectsOne = React.lazy(
  () => import("pages/MyaccounttotalprojectsOne"),
);
const Myaccountnotiftotalpoints = React.lazy(
  () => import("pages/Myaccountnotiftotalpoints"),
);
const Myaccounthome = React.lazy(() => import("pages/Myaccounthome"));
const Webappbuildercodexwithoutcode = React.lazy(
  () => import("pages/Webappbuildercodexwithoutcode"),
);
const CodeXDAOgovernance = React.lazy(() => import("pages/CodeXDAOgovernance"));
const CodeXDAOhomepage = React.lazy(() => import("pages/CodeXDAOhomepage"));
const HomepagecontributorUpdatedklikflowlevelOne = React.lazy(
  () => import("pages/HomepagecontributorUpdatedklikflowlevelOne"),
);
const HomepagecontributorUpdatedOne = React.lazy(
  () => import("pages/HomepagecontributorUpdatedOne"),
);
const Regristrationpagecontributorgeneraluser = React.lazy(
  () => import("pages/Regristrationpagecontributorgeneraluser"),
);
const Accountsuccesscontributorgeneraluser = React.lazy(
  () => import("pages/Accountsuccesscontributorgeneraluser"),
);
const Accountsuccesscontributordeveloper = React.lazy(
  () => import("pages/Accountsuccesscontributordeveloper"),
);
const Regristrationpagecontributordev = React.lazy(
  () => import("pages/Regristrationpagecontributordev"),
);
const HomepagecontributorUpdatedregister = React.lazy(
  () => import("pages/HomepagecontributorUpdatedregister"),
);
const HomepagecontributorUpdated = React.lazy(
  () => import("pages/HomepagecontributorUpdated"),
);
const CreateToken = React.lazy(() => import("pages/CreateToken"));
const NOCODENFTloading = React.lazy(() => import("pages/NOCODENFTloading"));
const DAOapprovetransactiona = React.lazy(
  () => import("pages/DAOapprovetransactiona"),
);
const DAOwaitingforconfirmationb = React.lazy(
  () => import("pages/DAOwaitingforconfirmationb"),
);
const NOCODENFTDEPLOY = React.lazy(() => import("pages/NOCODENFTDEPLOY"));
const DAOresultb = React.lazy(() => import("pages/DAOresultb"));
const DAOresulta = React.lazy(() => import("pages/DAOresulta"));
const NOCODENFTMARKET = React.lazy(() => import("pages/NOCODENFTMARKET"));
const NOCODENFTfeatures = React.lazy(() => import("pages/NOCODENFTfeatures"));
const DAOdefineb = React.lazy(() => import("pages/DAOdefineb"));
const DAOdefinea = React.lazy(() => import("pages/DAOdefinea"));
const NOCODENFTCONTRACT = React.lazy(() => import("pages/NOCODENFTCONTRACT"));
const NOCODENFTgeneralinfo = React.lazy(
  () => import("pages/NOCODENFTgeneralinfo"),
);
const DAOdefinemultisigmembers = React.lazy(
  () => import("pages/DAOdefinemultisigmembers"),
);
const DAOdefinetokenholder = React.lazy(
  () => import("pages/DAOdefinetokenholder"),
);
const NOCODENFTBLOCKCHAIN = React.lazy(
  () => import("pages/NOCODENFTBLOCKCHAIN"),
);
const Mytokenwritecontractdetailall = React.lazy(
  () => import("pages/Mytokenwritecontractdetailall"),
);
const Mytokenreadcontractdetailall = React.lazy(
  () => import("pages/Mytokenreadcontractdetailall"),
);
const DAOdescribe = React.lazy(() => import("pages/DAOdescribe"));
const NOCODENFThomepage = React.lazy(() => import("pages/NOCODENFThomepage"));
const TokenWritedefault = React.lazy(() => import("pages/TokenWritedefault"));
const Mytokenreadcontractdefault = React.lazy(
  () => import("pages/Mytokenreadcontractdefault"),
);
const Createtokensuccescreatetoken = React.lazy(
  () => import("pages/Createtokensuccescreatetoken"),
);
const Createtokenliquidgeneratortoken = React.lazy(
  () => import("pages/Createtokenliquidgeneratortoken"),
);
const Createtokenpageselectblockchain = React.lazy(
  () => import("pages/Createtokenpageselectblockchain"),
);
const CreateProjectRight = React.lazy(() => import("pages/CreateProjectRight"));
const MEETDAOEXPERT = React.lazy(() => import("pages/MEETDAOEXPERT"));
const DAOselecttesnet = React.lazy(() => import("pages/DAOselecttesnet"));
const DAOHOMEGENERATOR = React.lazy(() => import("pages/DAOHOMEGENERATOR"));
const Homepagecodexapp = React.lazy(() => import("pages/Homepagecodexapp"));
const Launchpadloading = React.lazy(() => import("pages/Launchpadloading"));
const Launchpadresult = React.lazy(() => import("pages/Launchpadresult"));
const Launchpadchoosewallet = React.lazy(
  () => import("pages/Launchpadchoosewallet"),
);
const Launchpad = React.lazy(() => import("pages/Launchpad"));
const Blog = React.lazy(() => import("pages/Blog"));
const MEETDAOEXPERTtemplate = React.lazy(
  () => import("pages/MEETDAOEXPERTtemplate"),
);
const CreateTOkenDetails = React.lazy(() => import("pages/CreateTOkenDetails"));
const Tokengeneration = React.lazy(() => import("pages/Tokengeneration"));
const CodeXDAOgovernanceOne = React.lazy(
  () => import("pages/CodeXDAOgovernanceOne"),
);
const Createtokenhomepage = React.lazy(
  () => import("pages/Createtokenhomepage"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Createtokenhomepage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/codexdaogovernanceone"
            element={<CodeXDAOgovernanceOne />}
          />
          <Route path="/tokengeneration" element={<Tokengeneration />} />
          <Route path="/createtokendetails" element={<CreateTOkenDetails />} />
          <Route
            path="/meetdaoexperttemplate"
            element={<MEETDAOEXPERTtemplate />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route
            path="/launchpadchoosewallet"
            element={<Launchpadchoosewallet />}
          />
          <Route path="/launchpadresult" element={<Launchpadresult />} />
          <Route path="/launchpadloading" element={<Launchpadloading />} />
          <Route path="/homepagecodexapp" element={<Homepagecodexapp />} />
          <Route path="/daohomegenerator" element={<DAOHOMEGENERATOR />} />
          <Route path="/daoselecttesnet" element={<DAOselecttesnet />} />
          <Route path="/meetdaoexpert" element={<MEETDAOEXPERT />} />
          <Route path="/createprojectright" element={<CreateProjectRight />} />
          <Route
            path="/createtokenpageselectblockchain"
            element={<Createtokenpageselectblockchain />}
          />
          <Route
            path="/createtokenliquidgeneratortoken"
            element={<Createtokenliquidgeneratortoken />}
          />
          <Route
            path="/createtokensuccescreatetoken"
            element={<Createtokensuccescreatetoken />}
          />
          <Route
            path="/mytokenreadcontractdefault"
            element={<Mytokenreadcontractdefault />}
          />
          <Route path="/tokenwritedefault" element={<TokenWritedefault />} />
          <Route path="/nocodenfthomepage" element={<NOCODENFThomepage />} />
          <Route path="/daodescribe" element={<DAOdescribe />} />
          <Route
            path="/mytokenreadcontractdetailall"
            element={<Mytokenreadcontractdetailall />}
          />
          <Route
            path="/mytokenwritecontractdetailall"
            element={<Mytokenwritecontractdetailall />}
          />
          <Route
            path="/nocodenftblockchain"
            element={<NOCODENFTBLOCKCHAIN />}
          />
          <Route
            path="/daodefinetokenholder"
            element={<DAOdefinetokenholder />}
          />
          <Route
            path="/daodefinemultisigmembers"
            element={<DAOdefinemultisigmembers />}
          />
          <Route
            path="/nocodenftgeneralinfo"
            element={<NOCODENFTgeneralinfo />}
          />
          <Route path="/nocodenftcontract" element={<NOCODENFTCONTRACT />} />
          <Route path="/daodefinea" element={<DAOdefinea />} />
          <Route path="/daodefineb" element={<DAOdefineb />} />
          <Route path="/nocodenftfeatures" element={<NOCODENFTfeatures />} />
          <Route path="/nocodenftmarket" element={<NOCODENFTMARKET />} />
          <Route path="/daoresulta" element={<DAOresulta />} />
          <Route path="/daoresultb" element={<DAOresultb />} />
          <Route path="/nocodenftdeploy" element={<NOCODENFTDEPLOY />} />
          <Route
            path="/daowaitingforconfirmationb"
            element={<DAOwaitingforconfirmationb />}
          />
          <Route
            path="/daoapprovetransactiona"
            element={<DAOapprovetransactiona />}
          />
          <Route path="/nocodenftloading" element={<NOCODENFTloading />} />
          <Route path="/createtoken" element={<CreateToken />} />
          <Route
            path="/homepagecontributorupdated"
            element={<HomepagecontributorUpdated />}
          />
          <Route
            path="/homepagecontributorupdatedregister"
            element={<HomepagecontributorUpdatedregister />}
          />
          <Route
            path="/regristrationpagecontributordev"
            element={<Regristrationpagecontributordev />}
          />
          <Route
            path="/accountsuccesscontributordeveloper"
            element={<Accountsuccesscontributordeveloper />}
          />
          <Route
            path="/accountsuccesscontributorgeneraluser"
            element={<Accountsuccesscontributorgeneraluser />}
          />
          <Route
            path="/regristrationpagecontributorgeneraluser"
            element={<Regristrationpagecontributorgeneraluser />}
          />
          <Route
            path="/homepagecontributorupdatedone"
            element={<HomepagecontributorUpdatedOne />}
          />
          <Route
            path="/homepagecontributorupdatedklikflowlevelone"
            element={<HomepagecontributorUpdatedklikflowlevelOne />}
          />
          <Route path="/codexdaohomepage" element={<CodeXDAOhomepage />} />
          <Route path="/codexdaogovernance" element={<CodeXDAOgovernance />} />
          <Route
            path="/webappbuildercodexwithoutcode"
            element={<Webappbuildercodexwithoutcode />}
          />
          <Route path="/myaccounthome" element={<Myaccounthome />} />
          <Route
            path="/myaccountnotiftotalpoints"
            element={<Myaccountnotiftotalpoints />}
          />
          <Route
            path="/myaccounttotalprojectsone"
            element={<MyaccounttotalprojectsOne />}
          />
          <Route
            path="/myaccounttotalrewardone"
            element={<MyaccounttotalrewardOne />}
          />
          <Route path="/myaccountdeveloper" element={<Myaccountdeveloper />} />
          <Route
            path="/myaccountnotiftotalpointsone"
            element={<MyaccountnotiftotalpointsOne />}
          />
          <Route
            path="/myaccounttotalprojects"
            element={<Myaccounttotalprojects />}
          />
          <Route
            path="/myaccounttotalreward"
            element={<Myaccounttotalreward />}
          />
          <Route
            path="/myaccountdevcheckpoints"
            element={<Myaccountdevcheckpoints />}
          />
          <Route
            path="/myaccountdevcheckpointsviewmore"
            element={<Myaccountdevcheckpointsviewmore />}
          />
          <Route
            path="/myaccountcheckpointviewmore"
            element={<Myaccountcheckpointviewmore />}
          />
          <Route
            path="/myaccountcheckpointsviewmore"
            element={<Myaccountcheckpointsviewmore />}
          />
          <Route
            path="/myaccountcontributedprojectsviewmore"
            element={<Myaccountcontributedprojectsviewmore />}
          />
          <Route
            path="/myaccountcontributedprojectsall"
            element={<Myaccountcontributedprojectsall />}
          />
          <Route
            path="/myaccountcontributedprojectsviewmoreone"
            element={<MyaccountcontributedprojectsviewmoreOne />}
          />
          <Route
            path="/myaccountcontributeviewmore"
            element={<Myaccountcontributeviewmore />}
          />
          <Route
            path="/myaccountgeneraluserrewardtransaction"
            element={<Myaccountgeneraluserrewardtransaction />}
          />
          <Route
            path="/myaccountgeneraluserrewardtransactionall"
            element={<Myaccountgeneraluserrewardtransactionall />}
          />
          <Route
            path="/myaccountrewardtransactiondefault"
            element={<Myaccountrewardtransactiondefault />}
          />
          <Route
            path="/myaccountrewardtransactionall"
            element={<Myaccountrewardtransactionall />}
          />
          <Route
            path="/myaccountgeneraluserdeleteaccountsucces"
            element={<Myaccountgeneraluserdeleteaccountsucces />}
          />
          <Route
            path="/myaccountgeneraluserdeleteaccountconfirmation"
            element={<Myaccountgeneraluserdeleteaccountconfirmation />}
          />
          <Route
            path="/myaccountdeveloperdeleteaccountconfimation"
            element={<Myaccountdeveloperdeleteaccountconfimation />}
          />
          <Route
            path="/myaccountdeveloperdeleteaccountsucces"
            element={<Myaccountdeveloperdeleteaccountsucces />}
          />
          <Route path="/communitysignin" element={<Communitysignin />} />
          <Route
            path="/communitysigninexternalappidentityviadiscord"
            element={<CommunitysigninExternalappidentityviadiscord />}
          />
          <Route
            path="/communitysuccesauthentification"
            element={<Communitysuccesauthentification />}
          />
          <Route
            path="/forumverificationpage"
            element={<Forumverificationpage />}
          />
          <Route
            path="/communityaccountsettingaccount"
            element={<Communityaccountsettingaccount />}
          />
          <Route
            path="/communityaccountsettingnotif"
            element={<Communityaccountsettingnotif />}
          />
          <Route
            path="/communityaccountsettingconnections"
            element={<Communityaccountsettingconnections />}
          />
          <Route
            path="/forumcodexdiscusiondetailone"
            element={<ForumcodexdiscusiondetailOne />}
          />
          <Route
            path="/forumcodexalldetail"
            element={<Forumcodexalldetail />}
          />
          <Route
            path="/forumcodexaddnewtopic"
            element={<Forumcodexaddnewtopic />}
          />
          <Route path="/forumcodex" element={<Forumcodex />} />
          <Route
            path="/homepagecontributor"
            element={<Homepagecontributor />}
          />
          <Route
            path="/forumcodexdiscusiondiscobot"
            element={<Forumcodexdiscusiondiscobot />}
          />
          <Route
            path="/forumcodexaccountsetnotificationscedhule"
            element={<Forumcodexaccountsetnotificationscedhule />}
          />
          <Route
            path="/forumcodexaccountsetaccount"
            element={<Forumcodexaccountsetaccount />}
          />
          <Route
            path="/forumcodexeducation"
            element={<Forumcodexeducation />}
          />
          <Route
            path="/forumcodexeducationalldetail"
            element={<Forumcodexeducationalldetail />}
          />
          <Route
            path="/forumcodexdiscusiondetail"
            element={<Forumcodexdiscusiondetail />}
          />
          <Route
            path="/forumcodexdiscussiondefault"
            element={<ForumcodexDiscussiondefault />}
          />
          <Route path="/codexdevelopment" element={<CodeXDevelopment />} />
          <Route
            path="/forumcodexsuggestion"
            element={<Forumcodexsuggestion />}
          />
          <Route
            path="/forumcodexeducationalldetailone"
            element={<ForumcodexeducationalldetailOne />}
          />
          <Route path="/forumcodexprojects" element={<Forumcodexprojects />} />
          <Route
            path="/forumcodexprojectsalldetail"
            element={<Forumcodexprojectsalldetail />}
          />
          <Route
            path="/forumcodexprojectsone"
            element={<ForumcodexprojectsOne />}
          />
          <Route
            path="/forumcodexprojectsalldetailone"
            element={<ForumcodexprojectsalldetailOne />}
          />
          <Route
            path="/forumcodexdevelopment"
            element={<Forumcodexdevelopment />}
          />
          <Route
            path="/forumcodexdevelopmentalldetail"
            element={<Forumcodexdevelopmentalldetail />}
          />
          <Route
            path="/forumcodexpullrequest"
            element={<Forumcodexpullrequest />}
          />
          <Route
            path="/forumcodexpullrequestalldetail"
            element={<Forumcodexpullrequestalldetail />}
          />
          <Route
            path="/forumcodexpullrequestmessage"
            element={<Forumcodexpullrequestmessage />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
