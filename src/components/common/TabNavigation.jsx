// components/common/TabsNavigation.jsx
import { motion } from 'framer-motion';

const TabsNavigation = ({
  tabs,
  activeTab,
  setActiveTab,
  activeTabColor = 'from-primary-light to-primary-dark',
  inactiveTabColor = 'text-primary-dark hover:bg-primary-dark/10',
  iconColor = 'text-primary-light',
  activeIconColor = 'text-white',
  gradientFadeColor = 'from-primary-dark/5'
}) => {
  return (
    <div className="mb-12">
      <div className="relative">
        {/* Scrollable tabs container with gradient fade */}
        <div className="relative">
          {/* <div className={`absolute inset-y-0 left-0 w-8 bg-gradient-to-r ${gradientFadeColor} to-transparent z-10 pointer-events-none`}></div>
          <div className={`absolute inset-y-0 right-0 w-8 bg-gradient-to-l ${gradientFadeColor} to-transparent z-10 pointer-events-none`}></div> */}

          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="inline-flex space-x-2 px-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-3 rounded-xl font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-white'
                      : inactiveTabColor
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-r ${activeTabColor} rounded-xl shadow-lg z-0`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon 
                      size={18} 
                      className={activeTab === tab.id ? activeIconColor : iconColor} 
                    />
                    {tab.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsNavigation;
